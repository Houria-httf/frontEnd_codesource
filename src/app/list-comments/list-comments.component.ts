import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCommentComponent } from '../create-comment/create-comment.component';

@Component({
  selector: 'app-list-comments',
  standalone: true,
  imports: [CommonModule,CreateCommentComponent],
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.css'
})
export class ListCommentsComponent {
  comments = [
    { text: 'wonderfull!', author: 'User1' },
    { text: '.', author: 'User2' },
    { text: 'The storyline is captivating.', author: 'User3' },
  ];
}
