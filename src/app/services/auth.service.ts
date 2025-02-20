import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:4000/api/auth';

  constructor(private http: HttpClient) { }

  signIn(user: any) {
    return this.http.post<any>(this.url + '/signin', user);
  }
}
