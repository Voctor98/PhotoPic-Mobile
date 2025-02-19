import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonList, IonButtons, IonModal, IonCheckbox } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonModal,
    IonCheckbox,
    IonModal,
    IonList,
    IonInput,
    IonItem,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ]
})
export class LoginPage implements OnInit {

  canDismiss = false;
  presentingElement!: HTMLElement | null;

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('ion-page');
  }

  onTermsChanged(event: CustomEvent) {
    this.canDismiss = event.detail.checked;
  }

  login() {
    if (this.email === 'test@example.com' && this.password === '12345') {
      this.router.navigate(['tabs']);
    } else {
      alert('Invalid credentials');
    }
  }

}
