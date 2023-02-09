import { AbstractControl, Validators } from '@angular/forms';



export function ValidateMobile(control: AbstractControl) {

    let patternMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/

    control.addValidators(Validators.pattern(patternMobile))

    return ;

}


