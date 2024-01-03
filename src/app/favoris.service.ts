import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
import { Favorite } from './Favorite';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class favorisService {
  private userIdSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);


  private baseUrl = 'http://localhost:8080/api/movies';

  private userId: number | undefined;
  constructor(private http: HttpClient) {}

  setUserId(id: number): void {
    this.userIdSubject.next(id);
  }

  getUserId(): number | undefined {
    return this.userIdSubject.value;
  }



  getFavoriteMovies(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/favorites/${userId}`);
  }

  toggleFavorite(movie: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/toggle-favorite`, movie);
  }
   
}
