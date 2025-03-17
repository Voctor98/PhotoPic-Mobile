import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from "@capacitor/preferences";
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:4000/api/auth/user';
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string, user: any }>(`${this.url}/signin`, { email, password }).pipe(
      map(response => {
        Preferences.set({ key: 'token', value: response.token }); // Save token in preferences
        Preferences.set({ key: 'user', value: response.user.id }); // Save user id in preferences
        localStorage.setItem('user', response.user.id); // Save user id in local storage
        localStorage.setItem('token', response.token); // Save token in local storage
        this.authState.next(true);
        return response.user; // Return user data
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.url}/signup`, userData);
  }

  logOut() {
    localStorage.clear();
    this.authState.next(false);
    this.router.navigate(['/login'])
  }

  isAuthenticated(): Observable<boolean> {
    return this.authState.asObservable();
  }
}
