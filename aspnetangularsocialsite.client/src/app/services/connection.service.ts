// src/app/services/connection.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connection } from '../models/connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private apiUrl = 'https://localhost:5001/api/connections'; 

  constructor(private http: HttpClient) { }

  getConnections(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.apiUrl);
  }

  getConnection(id: number): Observable<Connection> {
    return this.http.get<Connection>(`${this.apiUrl}/${id}`);
  }

  addConnection(connection: Connection): Observable<Connection> {
    return this.http.post<Connection>(this.apiUrl, connection);
  }

  updateConnection(id: number, connection: Connection): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, connection);
  }

  deleteConnection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
