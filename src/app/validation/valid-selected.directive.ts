import { Directive ,  forwardRef, Injectable } from '@angular/core';
import { ValidationErrors, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';


export const selectedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log("in validation");
  console.log("control value " +control.value );
  if(!control.value) return {'selectedValidator':true};
  if(control.value === '') {
    console.log("in condition");
    return {'selectedValidator':true};
  }
  return null;
}


@Directive({
  selector: '[appValidSelected]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidSelectedDirective),
    multi: true
  }]
})

@Injectable({ providedIn: 'root' })
export class ValidSelectedDirective implements Validator  {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return selectedValidator(control);
  }

}
