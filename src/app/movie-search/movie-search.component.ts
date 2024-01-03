import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../film.service';
import {film } from '../model/movie';
@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent  {
   
 }
 