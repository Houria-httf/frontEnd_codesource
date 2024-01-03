import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { film } from '../../model/film.model';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import {HttpClientModule} from "@angular/common/http";
import { ListCommentsComponent } from '../list-comments/list-comments.component';

@Component({
    selector: 'app-film-details',
    standalone: true,
    templateUrl: './film-details.component.html',
    styleUrl: './film-details.component.scss',
    imports: [CommonModule, HttpClientModule,ListCommentsComponent]
})
export class FilmDetailsComponent{

  film: film | undefined;
  filmId!: number;
  showCommentEditor = false;


  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService) { }

  toggleCommentEditor() {
    this.showCommentEditor = !this.showCommentEditor;
  }
  

  ngOnInit(): void {
    this.filmId = this.route.snapshot.params['id'];
    this.filmService.getMovieById(this.filmId).subscribe((data: any) => {
      console.log(data);
      this.film = {
        id: data.id,
        title: data.title,
        year: data.release_date,
        description: data.overview,
        imageUrl: data.poster_path,
         
      }
    })
  }



}