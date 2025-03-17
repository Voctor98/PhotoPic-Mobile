import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    IonButton,
    IonItem,
    IonLabel,
    IonToggle,
    IonSelect,
    IonSelectOption,
  ],
})
export class Tab3Page {
  constructor(private authService: AuthService, private router: Router) {}

  cerrarSesion(){
    this.authService.logOut()
  }
}
