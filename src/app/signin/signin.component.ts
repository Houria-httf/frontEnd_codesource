import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogginuserService } from '../logginuser.service';
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterModule } from '@angular/router';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { favorisService } from '../favoris.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,FilmDetailsComponent,SignupComponent,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: LogginuserService,private favoriService: favorisService) {}

  signIn() {
    const signInRequest = { email: this.email, password: this.password };

    this.userService.signIn(signInRequest).subscribe(response => {
      console.log('Us signed in successfully:', response);
      this.favoriService.setUserId(response.id)
    }, error => {
      console.error('Error signing in:', error);
    });
  }

}
