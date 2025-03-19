import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { Preferences } from '@capacitor/preferences';
import { SessionsService } from '../services/sessions.service';
import { NgFor, NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonicModule, 
    FormsModule,
    NgFor,
    NgIf
  ],
})
export class Tab1Page implements OnInit{

  accessCode = '';
  alertOpen = false;
  message = '';
  length = 0;
  sessions: any[] = [];
  userId = localStorage.getItem('user') || '';

  constructor(private sessionService: SessionsService) {
    addIcons({ add });
  }

  ngOnInit(): void {
    this.getUserSessions();
    
  }

  async getUserSessions(event?: any) {
    document.addEventListener('touchstart', function(e) {}, {passive: true});
    document.addEventListener('touchmove', function(e) {}, {passive: true});
    this.sessionService.getUserSessions(this.userId).subscribe({
      next: (data) => {
        this.sessions = data;
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
    this.sessionService.asingSession(this.userId, this.accessCode).subscribe({
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
