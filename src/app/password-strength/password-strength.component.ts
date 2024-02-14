import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  // Constants
  MIN_PASSWORD_LENGTH: number = 8;

  checkStrength() {
     // Reset strength and colors if password is empty
     if (this.password.length === 0) {
      this.strength = '';
      this.colors = ['gray', 'gray', 'gray'];
      return;
    }
    

    // Determine password strength and set colors accordingly
    const points = {
      hasLetters: /[a-zA-Z]/.test(this.password) ? 1 : 0,
      hasDigits: /\d/.test(this.password) ? 1 : 0,
      hasSymbols: /\W/.test(this.password) ? 1 : 0
    };
    const totalPoints = points.hasLetters + points.hasDigits + points.hasSymbols;
   
    switch (true) {
      case this.password.length < this.MIN_PASSWORD_LENGTH:
        this.strength = 'Too short';
        this.colors = ['red', 'red', 'red'];
        break;
      case totalPoints === 1:
        this.strength = 'Easy';
        this.colors = ['red', 'gray', 'gray'];
        break;
      case totalPoints === 2:
        this.strength = 'Medium';
        this.colors = ['yellow', 'yellow', 'gray'];
        break;
      case totalPoints === 3:
        this.strength = 'Strong';
        this.colors = ['green', 'green', 'green'];
        break;
    }
  }
}
