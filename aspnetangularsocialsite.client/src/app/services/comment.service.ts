// src/app/services/comment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://localhost:5001/api/comments'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }

  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  updateComment(id: number, comment: Comment): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, comment);
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
