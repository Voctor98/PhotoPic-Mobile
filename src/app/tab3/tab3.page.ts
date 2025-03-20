import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList, 
    MatButton,
    IonItem,
    IonLabel,
    IonText,
  ],
})
export class Tab3Page {

  user: any = JSON.parse(localStorage.getItem('dataUser') || '{}');
  constructor(private authService: AuthService) {}

  cerrarSesion(){
    this.authService.logOut()
  }
}
