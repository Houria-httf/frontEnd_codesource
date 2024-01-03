import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../user';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LogginuserService } from '../logginuser.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export class LogginComponent {
 
}
