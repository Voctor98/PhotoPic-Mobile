import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCardContent, IonRow, IonCol, IonCard, IonIcon, IonFooter, IonButton, ModalController, IonButtons } from '@ionic/angular/standalone';
import { PhotoPreviewComponent } from 'src/app/components/photo-preview/photo-preview.component';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonFooter, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, RouterLink]
})
export class AlbumPage implements OnInit {

  photos = [
    { src: 'https://th.bing.com/th/id/OIP.s39BfEG177OYOPoUNy8H2gHaFj?rs=1&pid=ImgDetMain', title: 'Photo 1' },
    { src: 'https://th.bing.com/th/id/R.2b29164606486c242574e1f76ebb4145?rik=Q8lra78tnvYxoQ&pid=ImgRaw&r=0', title: 'Photo 2' },
    { src: 'https://www.eldiario.com.co/wp-content/uploads/2021/09/NOTA-1-QUINCE-ANOS-SOFIA-PARRA.jpg', title: 'Photo 3' },
    { src: 'https://th.bing.com/th/id/R.9b5cb2c1e490830176af072c647e4378?rik=wqPImnCPjpkcGg&pid=ImgRaw&r=0', title: 'Photo 4' },
    { src: 'https://th.bing.com/th/id/OIP.BMX74dQWkzuaappcM1TlggHaE8?rs=1&pid=ImgDetMain', title: 'Photo 5' },
    { src: 'https://www.eldiario.com.co/wp-content/uploads/2022/01/NOTA-6-QUINCEANERA-e1642992597542.jpg', title: 'Photo 6' },
    { src: 'https://th.bing.com/th/id/OIP.EBxnKYDBWH8S9sMsO2_7KQHaJB?rs=1&pid=ImgDetMain', title: 'Photo 7' },
    { src: 'https://th.bing.com/th/id/R.d5ab654535975cc847cfdd08073cd686?rik=thO%2fQU3Kq7Qf6A&riu=http%3a%2f%2ftriplepar.com%2fwp-content%2fuploads%2f2016%2f12%2ffotografia-video-xv-anos-en-guadalajara6.jpg&ehk=zqMqY55CU%2bOGuyezw9WkVIjVka1vr0n4k6Sg5ImyrXw%3d&risl=&pid=ImgRaw&r=0', title: 'Photo 8' },
    { src: 'https://th.bing.com/th/id/OIP.UI1Fc-Fwy3Ln6cFprB7MlgHaJQ?rs=1&pid=ImgDetMain', title: 'Photo 9' },
    { src: 'https://th.bing.com/th/id/R.01e2c9d1c4c85c728225b9667d66401c?rik=Xn5LAAz%2bYjN5sg&pid=ImgRaw&r=0', title: 'Photo 10' },
  ];
  selectedPhoto: any[] = [];

  constructor(private modalCtrl: ModalController) {
    addIcons({ arrowBack })
  }

  ngOnInit() {
  }

  toggleSelection(photo: any) {
    const index = this.selectedPhoto.indexOf(photo);
    if (index === -1) {
      this.selectedPhoto.push(photo);
    } else {
      this.selectedPhoto.splice(index, 1);
    }
  }

  isSelected(photo: any): boolean {
    return this.selectedPhoto.includes(photo);
  }

  async openPhotoPreview(photo: any) {
    const modal = await this.modalCtrl.create({
      component: PhotoPreviewComponent,
      componentProps: { photo },
    });
    await modal.present();
    // const { data } = await modal.onWillDismiss();
    // if (data) {
    //   this.toggleSelection(photo);
    // }
  }

  submitSelection() {
    console.log('Selected photos:', this.selectedPhoto);
    // Here you can handle the selected photos, e.g., send them to a server or process them further.
    // For now, we'll just log them to the console.
  }
}
