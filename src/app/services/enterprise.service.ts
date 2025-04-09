import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  // private url = 'http://localhost:4000/api/enterprises';
  private url = 'https://photopic-back-production.up.railway.app/api/enterprises';

  constructor(private http: HttpClient) { }

  // Create a new enterprise
  createEnterprise(enterprise: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, enterprise);
  }

  // Read all enterprises
  getEnterprises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  // Read a single enterprise by ID
  getEnterpriseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Update an enterprise by ID
  updateEnterprise(id: string, enterprise: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, enterprise);
  }

  // Delete an enterprise by ID
  deleteEnterprise(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
