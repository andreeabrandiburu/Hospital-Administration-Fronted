import { AbstractControl, ControlConfig, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const inputValue = control.value;
        const forbidden = nameRegex.test(inputValue);
        if(forbidden)
        {
            return {forbiddenName: {value: control.value}};
        }
        return null;
    };
}