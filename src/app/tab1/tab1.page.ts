import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { SessionsService } from '../services/sessions.service';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { add, checkmarkCircle, closeCircle } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonItem, IonAvatar, IonLabel, IonGrid, IonCol, IonIcon, IonModal, IonButton, IonAlert, IonRow } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonModal,
    IonButton,
    IonAlert,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIcon,
    NgFor,
    NgIf,
    RouterLink
  ],
  providers: [DatePipe]
})
export class Tab1Page implements OnInit{

  accessCode = '';
  alertOpen = false;
  message = '';
  status = '';
  length = 0;
  sessions: any[] = [];
  // userId = localStorage.getItem('user') || '';
  userData: any = JSON.parse(localStorage.getItem('dataUser') || '{}');

  constructor(private sessionService: SessionsService) {
    addIcons({ add, closeCircle, checkmarkCircle });
  }

  ngOnInit(): void {
    this.getUserSessions();
    
  }

  async getUserSessions(event?: any) {
    document.addEventListener('touchstart', function(e) {}, {passive: true});
    document.addEventListener('touchmove', function(e) {}, {passive: true});
    this.sessionService.getUserSessions(this.userData.id).subscribe({
      next: (data) => {
        this.sessions = data;
        this.sessions.forEach((session) => {
          if (session.revised === false) {
            this.status = 'No revisado';
          } else {
            this.status = 'Revisado';
          }
        });
        console.log(data);
        if (event) {
          event.target.complete();
        }
      },
      error: (error) => {
        console.error(error);
        if (event) {
          event.target.complete();
        }
      }
    });
  }

  validateAccesCode(event: any): void {
    const input = event?.target as HTMLInputElement;
    const value = input.value;
    if (value.length > 6) {
      input.value = value.slice(0, 6);
    }

    this.accessCode = input.value;
  }

  onAccessCodeSubmit() {
    this.sessionService.asingSession(this.userData.id, this.accessCode).subscribe({
      next: (data) => {
        console.log(data);
        this.getUserSessions();
      },
      error: (error) => {
        console.error(error);
        this.alertOpen = true;
        this.message = error.error.msg;
      }
    });
  }
}
