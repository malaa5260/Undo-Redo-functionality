import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserFormHistoryService } from '../../app/services/user-form-history.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  feedbackMessage: string | null = null;

  constructor(private fb: FormBuilder, private historyService: UserFormHistoryService) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      agree: [false],
      country: ['']
    });
  }
  ngOnInit(): void {
    this.historyService.saveInputState(this.userForm.value);
    this.userForm.valueChanges.subscribe(value => {
      if (JSON.stringify(value) !== JSON.stringify(this.historyService.getCurrentState())) {
        this.historyService.saveInputState(value);
      }
    });
  }
  undo() {
    const previousState = this.historyService.undo();
    if (previousState) {
      this.userForm.patchValue(previousState);
      this.showFeedback('Undo action performed');
    } 
  }

  redo() {
    const nextState = this.historyService.redo();
    if (nextState) {
      this.userForm.patchValue(nextState);
      this.showFeedback('Redo action performed');
    }
  }

  canUndo(): boolean {
    return this.historyService.hasUndo();
  }

  canRedo(): boolean {
    return this.historyService.hasRedo();
  }
  showFeedback(message: string) {
    this.feedbackMessage = message;
    setTimeout(() => {
      this.feedbackMessage = null;
    }, 3000);
  }
}
