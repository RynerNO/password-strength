import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-password-strength-segments',
  standalone: true,
  template: `
  <div class="bar">
    <div class="segment" [style.backgroundColor]="state.colors[0]"></div>
    <div class="segment" [style.backgroundColor]="state.colors[1]"></div>
    <div class="segment" [style.backgroundColor]="state.colors[2]"></div>
  </div>
  <div class="strength">{{state.text}}</div>
  `,
  styles: `  
    .strength {
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
    }
    
    .bar {
      width: 100%;
      height: 20px;
      display: flex;
    }
    
    .segment {
      flex: 1;
      border: 1px solid #ccc;
      height: 5px;
    }
  `
})
export class PasswordStrengthSegmentsComponent {
  @Input() state: { text: string, colors: string[]} = {
    text: '',
    colors: ['gray', 'gray', 'gray']
  };

}
