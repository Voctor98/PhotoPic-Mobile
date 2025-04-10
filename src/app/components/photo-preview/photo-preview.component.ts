import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { Swiper } from "swiper";
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  imports: [IonContent, IonTitle, IonIcon, IonButton, IonButtons, IonToolbar, IonHeader, CommonModule,],
  standalone: true,
  styleUrls: ['./photo-preview.component.scss'],
})
export class PhotoPreviewComponent  implements OnInit {

  swiper!: Swiper;

  @Input() photo: any;

  constructor(private modalCtrl: ModalController) { 
    addIcons({ close });
  }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

}
