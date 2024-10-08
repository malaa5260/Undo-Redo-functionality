import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MultipleVisitsEmployeeProcessingComponent } from "../multiple-visits-employee-processing/multiple-visits-employee-processing.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [MultipleVisitsEmployeeProcessingComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(MultipleVisitsEmployeeProcessingComponent)
  multipleVisitsEmployeeProcessingComponent!: MultipleVisitsEmployeeProcessingComponent;


  ngAfterViewInit(): void {
    this.multipleVisitsEmployeeProcessingComponent.processEmployee();
  }


  callChildMethod() {
    this.multipleVisitsEmployeeProcessingComponent.processEmployee();
  }

  resetEmployeeCountInChild() {
    this.multipleVisitsEmployeeProcessingComponent.resetEmployeeCount();
  }
}
