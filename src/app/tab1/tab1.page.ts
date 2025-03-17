import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Preferences } from '@capacitor/preferences';
import { SessionsService } from '../services/sessions.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    NgFor
  ],
})
export class Tab1Page implements OnInit{

  sessions: any[] = [];
  userId = localStorage.getItem('user') || '';

  constructor(private sessionService: SessionsService) {}

  ngOnInit(): void {
    this.sessionService.getUserSessions(this.userId).subscribe({
      next: (data) => {
        this.sessions = data;
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
