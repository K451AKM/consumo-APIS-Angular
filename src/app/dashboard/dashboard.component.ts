// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { TablaConsultaComponent } from '../components/tabla-consulta/tabla-consulta.component';
import { SideMenuComponent } from './side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgIf, TablaConsultaComponent, SideMenuComponent],
  template: `
    <div class="dashboard">
      <header class="header">
        <div class="header-content">
          <button class="hamburger-btn" (click)="toggleMenu()">☰</button>
          <h1 class="title">Dashboard</h1>
        </div>
      </header>
      <main class="main-content">
        <app-side-menu 
          [isOpen]="isMenuOpen" 
          (menuToggle)="toggleMenu()" 
          (showUsers)="toggleUsersTable()"
          (logout)="onLogout()">
        </app-side-menu>
        @if (showUsersTable) {
          <app-tabla-consulta></app-tabla-consulta>
        }
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .dashboard {
      min-height: 100vh;
      background-color: #f0f2f5;
    }
    .header {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      align-items: center;
    }
    .hamburger-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      margin-right: 1rem;
    }
    .title {
      font-size: 1.5rem;
      color: #333;
      margin: 0;
    }
    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      position: relative;
    }
  `]
})
export class DashboardComponent {
  isMenuOpen = false;
  showUsersTable = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUsersTable() {
    this.showUsersTable = !this.showUsersTable;
  }

  onLogout() {
    // Implementa tu lógica de cierre de sesión aquí
    console.log('Logout clicked');
    // Por ejemplo, podrías navegar a la página de login:
    // this.router.navigate(['/login']);
  }
}