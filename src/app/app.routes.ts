import { Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';  
import { ListeFILMComponent } from './liste-film/liste-film.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { LogginComponent } from './loggin/loggin.component';
import { SigninComponent } from './signin/signin.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ViewFavoritesComponent } from './view-favorites/view-favorites.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
  {path: '', component: ListeFILMComponent},
  {path:'details',component: ListeFILMComponent},
  {path: 'details/:id', component: FilmDetailsComponent },
  {path: 'comment/:id', component: ListCommentsComponent  },
  {path: 'favorites', component:  ViewFavoritesComponent  },
  {path: 'loggin', component: LogginComponent  },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'results', component: SearchResultsComponent},

  {path: '**', redirectTo:'/not-found'},

];