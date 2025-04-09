import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  // private url = 'http://localhost:4000/api/session';
  private url = 'https://photopic-back-production.up.railway.app/api/session';

  constructor(private http: HttpClient) { }

  getUserSessions(userId: string): Observable<any> {
    return this.http.get<any>(`${this.url}/client/${userId}`);
  }

  asingSession(client: string, accessCode: string): Observable<any> {
    return this.http.put<any>(`${this.url}/assign`, { client, accessCode });
  }
}
