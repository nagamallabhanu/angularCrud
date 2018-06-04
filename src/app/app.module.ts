import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employees/listemployee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeserviceService } from './employees/employeeservice.service';
import { DisplayemployeeComponent } from './employees/displayemployee.component';

const appRoutes: Routes = [
    {path: 'list', component : ListemployeeComponent},
    {path: 'create', component : CreateEmployeeComponent},
    {path: '', redirectTo : '/list', pathMatch : 'full'  }

];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayemployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
