import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employeee } from '../models/employee.model';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit, OnChanges {

  @Input() employee: Employeee;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currValue = <Employeee>changes.employee.currentValue;
    const prevValue = <Employeee>changes.employee.previousValue;
    console.log(`$ Current Employee {currValue.name} value`);
    console.log(`$ Previous Employee {prevValue.name} value`);
  }
}
