import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListeFILMComponent } from './liste-film/liste-film.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LogginComponent } from './loggin/loggin.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListeFILMComponent,RouterModule,NavComponent,LogginComponent,MovieSearchComponent,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies-app';
 
  
}
