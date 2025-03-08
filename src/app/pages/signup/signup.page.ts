import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonButton, IonCheckbox, IonInput, IonIcon } from '@ionic/angular/standalone';
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonInput, IonCheckbox, IonButton, IonLabel, IonItem, IonContent, CommonModule, FormsModule, ReactiveFormsModule, MatIconModule]
})
export class SignupPage {

  registerForm: FormGroup;
  privacyAccepted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  togglePrivacy(event: any) {
    this.privacyAccepted = event.detail.checked;
  }

  register() {
    if (this.registerForm.valid && this.privacyAccepted) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          console.log('Usuario registrado');
          alert('Registro exitoso. Bienvenido a PhotoPic');
        },
        error: (error) => {
          console.error(error);
          alert('Registro fallido: ' + error.error.msg);
        }
      });
    } else {
      console.log('Formulario inválido o falta aceptar aviso de privacidad');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
