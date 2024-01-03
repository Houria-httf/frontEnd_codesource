import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService } from '../film.service';
import { forkJoin } from 'rxjs';
import { film } from '../../model/film.model';
import { ItemFilmComponent } from '../item-film/item-film.component';
import { mapFilmData } from '../mapFilmData';
import { RouterModule } from '@angular/router';
import { favorisService } from '../favoris.service';
import { Favorite } from '../Favorite';
import { OnInit } from '@angular/core';
@Component({
    selector: 'app-view-favorites',
    standalone: true,
    templateUrl: './view-favorites.component.html',
    styleUrl: './view-favorites.component.scss',
    imports: [CommonModule,ItemFilmComponent, RouterModule]
})
export class ViewFavoritesComponent implements OnInit {
  favoriteMovies!: any[];

  constructor(private favoriteService: favorisService) {}

  ngOnInit() {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies() {
    const userId = this.favoriteService.getUserId();

    if (userId) {
      this.favoriteService.getFavoriteMovies(7).subscribe((movies: any[]) => {
        console.log(movies)
        this.favoriteMovies = movies;
      });
    }
  }
}
