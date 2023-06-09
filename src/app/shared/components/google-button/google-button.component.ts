import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent {
  @Input() text: string;
  constructor() {
    this.text = 'Iniciar sesión con Google';
  }
}
