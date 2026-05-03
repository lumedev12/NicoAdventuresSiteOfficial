import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendMessage(data: any) {
    return this.http.post(`${environment.apiUrl}/send-message`, data);
  }
}