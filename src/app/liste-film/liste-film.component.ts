import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFilmComponent } from '../item-film/item-film.component';
import { FilmService } from '../film.service';
import {film } from '../model/movie';

@Component({
  selector: 'app-liste-film',
  standalone: true,
  imports: [CommonModule, ItemFilmComponent],
  templateUrl: './liste-film.component.html',
  styleUrl: './liste-film.component.css'
})
export class ListeFILMComponent {
  films : film[] =[];;
  constructor(private filmService: FilmService){

  }
  handleClick($event: string) {
    alert($event)
  }

  ngOnInit() {
    this.filmService.getMovies().subscribe((data: any) => {
      this.films = data.results.map(
        (film:any) => ({
          id: film.id,
          title: film.title,
          year: film.release_date,
          description: film.overview,
          imageUrl: film.poster_path
        })
      )
    })
  }
  // public getMovies(){
  //   this.filmService.getMovies().subscribe(
  //     (response: any): void =>{
  //       this.films = response.results;
  //     }, (error: HttpErrorResponse): void => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
