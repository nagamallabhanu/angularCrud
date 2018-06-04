import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employeee } from '../models/employee.model';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  private employees: Employeee[];
  private currEmp: Employeee ;
  private arrayIndex = 0 ;
  constructor(private _employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.currEmp = this.employees[0];
    console.log(this.employees[0]);
  }

  displayNextEmp(): void {
    this.arrayIndex  = this.arrayIndex + 1;
    if (this.arrayIndex < 3) {
    this.currEmp = this.employees[this.arrayIndex];
    }  else {
      this.arrayIndex = 0;
      this.currEmp = this.employees[this.arrayIndex];
    }
  }
}
