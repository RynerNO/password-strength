import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { PasswordStrengthInputComponent } from './input/password-srength-input.component';
import { PasswordStrengthSegmentsComponent } from './strength-segments/password-strength-segments.component';
@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [PasswordStrengthInputComponent, PasswordStrengthSegmentsComponent, ReactiveFormsModule],
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  form: FormGroup;
  passwordStrengthState = {
    text: '',
    colors: ['gray', 'gray', 'gray']
  }
  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.form = this.fb.group({
      password: ['']
    })

    this.form.get('password')?.valueChanges.subscribe((password) => {
      this.passwordStrengthState = this.passwordStrengthService.getPasswordStrength(password);
    })
  }
  // Constants
  
 
 
}
