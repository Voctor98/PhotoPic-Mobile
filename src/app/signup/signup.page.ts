import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonInput, IonContent,
    CommonModule, 
    FormsModule,
    IonList,
    IonItem,
    MatButtonModule,
    RouterLink
  ]
})
export class SignupPage implements OnInit {

  termsAccepted: boolean = false;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateStatus() {
    return this.termsAccepted && this.email.length > 0 && this.password.length > 0 && this.password === this.confirmPassword;
  }

  signup() {
    if (this.validateStatus()) {
      this.router.navigate(['tabs']);
    } else {
      alert('validation failed');
    }
  }

}
