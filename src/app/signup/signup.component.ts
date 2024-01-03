import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginuserService } from '../logginuser.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: LogginuserService) {}

  signUp() {
    const user = { fullName: this.fullName, email: this.email, password: this.password };
    this.userService.signUp(user).subscribe(response => {
      console.log('User signed up successfully:', response);
    }, error => {
      console.error('Error signing up:', error);
    });
  }
}
