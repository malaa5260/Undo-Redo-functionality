import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleVisitsEmployeeProcessingComponent } from './multiple-visits-employee-processing.component';

describe('MultipleVisitsEmployeeProcessingComponent', () => {
  let component: MultipleVisitsEmployeeProcessingComponent;
  let fixture: ComponentFixture<MultipleVisitsEmployeeProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleVisitsEmployeeProcessingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleVisitsEmployeeProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
