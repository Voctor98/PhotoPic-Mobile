import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-complete-info',
  templateUrl: './complete-info.page.html',
  styleUrls: ['./complete-info.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonItem, IonLabel, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CompleteInfoPage {
  businessForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      businessType: ['', [Validators.required]],
      businessAddress: ['', [Validators.required]],
      businessPhone: ['', [Validators.required]],
      businessEmail: ['', [Validators.required, Validators.email]],
    });
   }

  onSubmit() {
    if (this.businessForm.valid) {
      console.log('Form Data:', this.businessForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
