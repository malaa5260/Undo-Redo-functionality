import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-visits-employee-processing',
  standalone: true,
  imports: [],
  templateUrl: './multiple-visits-employee-processing.component.html',
  styleUrl: './multiple-visits-employee-processing.component.scss'
})
export class MultipleVisitsEmployeeProcessingComponent {
  employeeCount: number = 0;


  processEmployee() {
    this.employeeCount += 1;
  }
  resetEmployeeCount() {
    this.employeeCount = 0;
  }
}
