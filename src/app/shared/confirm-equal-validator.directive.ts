import { Directive, Input } from '@angular/core';
import { Validators, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers : [
    {
      provide: NG_VALIDATORS,
      useExisting : ConfirmEqualValidatorDirective,
      multi : true
    }
  ]
})
export class ConfirmEqualValidatorDirective implements Validators {
  // @Input() appConfirmEqualValidator: string;
  // validate(control: AbstractControl): { [key: string]: any} | null {
  //     const cntrlToVal = control.parent.get(this.appConfirmEqualValidator);
  //     if (control.value !== cntrlToVal.value) {
  //       // return {'notEqual': true};
  //       return {'appConfirmEqualValidator': true};
  //     } else {
  //       return null;
  //     }
  // }

  validate(pwdGroup: AbstractControl): { [key: string]: any} | null {
      const pwd = pwdGroup.get('namePassword');
      const confpwd = pwdGroup.get('confirmpassword');
      if (pwd && confpwd && pwd.value !== confpwd.value) {
        // return {'notEqual': true};
        return {'appConfirmEqualValidator': true};
      } else {
        return null;
      }
  }
  constructor() { }

}
