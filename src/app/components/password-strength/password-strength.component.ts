import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string = '';
  colors: string[] = ['gray', 'gray', 'gray'];
  constructor(private passwordStrengthService: PasswordStrengthService) {}
  // Constants
  
 
  checkStrength() {
    const strength = this.passwordStrengthService.getPasswordStrength(this.password)
    this.strength = strength.text
    this.colors = strength.colors
  }
}
