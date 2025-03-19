import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonButton, IonAlert, IonToast } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonAlert, IonContent, IonToast, CommonModule, FormsModule, RouterLink]
})
export class LoginPage {

  email = '';
  isAlertOpen = false;
  isToastOpen = false;
  password = '';
  message = ''
  userData: any; // New property to store user data

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    if(!this.email || !this.password) {
      this.message = 'Por favor, ingrese su correo y contraseña';
      this.isAlertOpen = true;
      return;
    }
    this.authService.signIn(this.email, this.password).subscribe({
      next: (user) => {
        this.userData = user; // Save user data
        console.log(user);
        this.isToastOpen = true;
        this.message = `Bienvenido ${user.name}`;
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      },
      error: (error) => {
        console.error(error);
        this.message = error.error.msg;
        this.isAlertOpen = true;
      }
    })
  }

  dismissAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  dissmisToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
