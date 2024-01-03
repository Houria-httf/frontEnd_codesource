import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080/api/comments'; // Remplacez par l'URL correcte de votre backend.
  
  constructor(private http: HttpClient) {}

  addComment(comment: { comment: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/comment`, comment);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/all`);
  }

   
}
