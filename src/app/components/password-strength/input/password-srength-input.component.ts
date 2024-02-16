import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-password-strength-input',
  standalone: true,
  imports: [FormsModule],
  template: `
   <input type="password" placeholder="Password" [(ngModel)]="value" (input)="onChange(value)">
  `,
  styles: `  
    input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    border: 1px solid #ccc;
  }`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthInputComponent),
      multi: true
    }
  ]
  
})
export class PasswordStrengthInputComponent implements ControlValueAccessor {
    value: string = '';
    onChange: any = () => {};
    onTouch: any = () => {};
  
    writeValue(value: string): void {
      this.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouch = fn;
    }
}
