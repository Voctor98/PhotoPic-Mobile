import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonInput, IonItem, IonContent, CommonModule, FormsModule, RouterLink]
})
export class LoginPage {

  email = '';
  password = '';
  userData: any; // New property to store user data

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.signIn(this.email, this.password).subscribe({
      next: (user) => {
        this.userData = user; // Save user data
        console.log(user);
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      },
      error: (error) => {
        console.error(error);
        alert('Login fallido: ' + error.error.msg);
      }
    })
  }
}
