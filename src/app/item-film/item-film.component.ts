import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { film } from '../../model/film.model';
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { favorisService } from '../favoris.service';
import { FilmService } from '../film.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-item-film',
  standalone: true,
  imports: [CommonModule,FilmDetailsComponent,RouterModule,MatIconModule],
  templateUrl: './item-film.component.html',
  styleUrl: './item-film.component.css'
})
export class ItemFilmComponent {
   
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor(
    private tmdbservice: FilmService,
    private http: HttpClient,
    private movieService: favorisService
  ) {}

  @Input() movie!: any;
  isFavorite = false;

  toggleFavorite(): void {
    const someValidId = this.movie.id; // Replace with the actual ID
    const someValidUserId = 7; // Replace with the actual user ID

    this.http.get(`http://localhost:8080/api/movies/favorites/${someValidUserId}`).subscribe(
      (updatedMovie: any) => {
        this.isFavorite = !this.isFavorite;
        this.change.emit(`Toggled favorite for movie: ${this.movie.title}`);
        this.movie=updatedMovie
      },
      (error) => {
        console.error('Error during toggle-favorite request', error);
        // You can handle the error and provide feedback to the user
      }
    );
  }

  onClick() {
    this.change.emit('Clicked on movie: ' + this.movie?.title);
  }
}
