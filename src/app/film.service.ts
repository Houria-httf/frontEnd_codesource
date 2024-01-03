import { Injectable } from '@angular/core';
import { film } from './model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e5862177b4f7bf6741b175936467976';
  private API_TOKEN = "1e5862177b4f7bf6741b175936467976"



  constructor(private http: HttpClient) {}

  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }
  searchMovies(text: string, page: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return this.http.get(url);
  }
  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  }
   

  
  getFilmById(id: number) : Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}')
  }
  

}