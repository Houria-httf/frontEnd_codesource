import { Component,HostListener,Output,EventEmitter,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService } from '../film.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {film } from '../model/movie';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  

 ngOnInit(): void {
 }

 searchText: string = '';
 searchResults$?: Observable<any>;

 constructor(public tmdbService: FilmService) {}

 onSearchChange() {
   
     const page = 1;
     this.searchResults$ = this.tmdbService.searchMovies(this.searchText, page);
   
 }

   

   
 }
 
 


   
   

