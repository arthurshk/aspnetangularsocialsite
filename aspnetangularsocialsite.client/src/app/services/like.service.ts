// src/app/services/like.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Like } from '../models/like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private apiUrl = 'https://localhost:5001/api/likes'; 

  constructor(private http: HttpClient) { }

  getLikes(): Observable<Like[]> {
    return this.http.get<Like[]>(this.apiUrl);
  }

  getLike(id: number): Observable<Like> {
    return this.http.get<Like>(`${this.apiUrl}/${id}`);
  }

  addLike(like: Like): Observable<Like> {
    return this.http.post<Like>(this.apiUrl, like);
  }

  updateLike(id: number, like: Like): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, like);
  }

  deleteLike(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
