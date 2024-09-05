import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormHistoryService {
  private undoStack: any[] = [];
  private redoStack: any[] = [];
  private currentState: any = null;

  constructor() { }

  saveInputState(state: any) {
    // Save the current state to undo stack only if it's different from the current one
    if (this.currentState !== null && JSON.stringify(this.currentState) !== JSON.stringify(state)) {
      this.undoStack.push(this.currentState);
    }
    // Update current state
    this.currentState = { ...state };
    this.redoStack = [];
  }

  undo(): any {
    if (this.undoStack.length === 0) return null;
    this.redoStack.push(this.currentState);
    this.currentState = this.undoStack.pop();
    return this.currentState;
  }

  redo(): any {
    if (this.redoStack.length === 0) return null;
    this.undoStack.push(this.currentState);
    this.currentState = this.redoStack.pop();
    return this.currentState;
  }

  hasUndo(): boolean {
    return this.undoStack.length > 0;
  }

  hasRedo(): boolean {
    return this.redoStack.length > 0;
  }

  getCurrentState(): any {
    return this.currentState;
  }
}
