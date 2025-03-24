import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEvenNumber]',
  standalone: false,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EvenNumberDirective,
    multi: true
  }]
})
export class EvenNumberDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value % 2 !== 0) {
      return { 'notEven': true };
    }
    return null;
  }
}