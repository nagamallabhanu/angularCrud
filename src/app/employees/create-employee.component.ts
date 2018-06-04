import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department  } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employeee} from '../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  // gender = 'male';
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
  ];
  employee: Employeee = {
    id: null,
    name: null,
    gender: null,
    email : '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  };
  constructor(private _EmpService: EmployeeserviceService, private _router: Router) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      // showWeekNumbers: true,
      // minDate: new Date(2018, 0, 1),
      // maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
      });
   }

   togglePhotoPreview() {
     this.previewPhoto = !this.previewPhoto;
   }
  ngOnInit() {
  }

  saveEmployee(employeeForm: NgForm) {
    this.employee.name = employeeForm.value['fn'];
    // this.employee.id = employeeForm.value['fn'];
    this.employee.gender = employeeForm.value['gender'];
    this.employee.email = employeeForm.value['email'];
    this.employee.phoneNumber = employeeForm.value['phoneNumber'];
    this.employee.contactPreference = employeeForm.value['contactPreference'];
    this.employee.dateOfBirth = employeeForm.value['dateofbirth'];
    this.employee.department = employeeForm.value['department']['id'];
    this.employee.isActive = employeeForm.value['isActive'];
    this.employee.photoPath = employeeForm.value['photoPath'];
    this._EmpService.saveEmployee(this.employee);
    this._router.navigate(['list']);
    console.log(employeeForm.value['department']['id']);
  }

}
