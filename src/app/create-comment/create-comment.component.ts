import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentService } from '../comment.service';
import { FormsModule } from '@angular/forms';
import { Comment } from '../comment';
@Component({
  selector: 'app-create-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.css'
})
export class CreateCommentComponent implements OnInit {

  comments: Comment[] = [];
  newComment: string = '';

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  submitComment() {
    this.commentService.addComment({comment: this.newComment}).subscribe(response => {
      this.getComments(); // Actualisez la liste des commentaires après l'ajout.
      this.newComment = '';
    });
  }
}