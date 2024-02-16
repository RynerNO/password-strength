import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  private MIN_PASSWORD_LENGTH: number = 8;
  private states = {
    text: ['Too short', 'Easy', 'Medium', 'Strong'],
    colors: [
    ['red', 'red', 'red'], 
    ['red', 'gray', 'gray'], 
    ['yellow', 'yellow', 'gray'],
    ['green', 'green', 'green']
    ]
  }
  getPasswordStrength(password: string) {
      // Reset if input field is empty
      if(password.length === 0) {
        return {
          text: '',
          colors: ['gray', 'gray', 'gray']
        }
      }
      // Determine password strength and set colors accordingly
      const points = {
        hasLetters: /[a-zA-Z]/.test(password) ? 1 : 0,
        hasDigits: /\d/.test(password) ? 1 : 0,
        hasSymbols: /\W/.test(password) ? 1 : 0,
        passwordLength: password.length < this.MIN_PASSWORD_LENGTH ? 0 : 1
      };

      const totalPoints = (points.passwordLength === 0) ? 0 : points.hasLetters + points.hasDigits + points.hasSymbols;
     
      return {
        text: this.states.text[totalPoints],
        colors: this.states.colors[totalPoints]
      }
  }
}
