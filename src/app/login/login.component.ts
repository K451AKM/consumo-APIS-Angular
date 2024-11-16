import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'kevin' && this.password === '1234') {
      // Simulamos el almacenamiento de una sesión
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}