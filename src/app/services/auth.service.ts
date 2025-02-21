import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:4000/api/auth';
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string}>(`${this.url}/signin`, { email, password }).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        this.authState.next(true);
        return true;
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.url}/signup`, userData);
  }

  logOut() {
    localStorage.removeItem('token');
    this.authState.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authState.asObservable();
  }
}
