import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { path } from './../../../../constants/path.constant';
import { Question } from './../../../../models/question.model';
import { QuestionService } from './../../../../services/question.service';

@Component({
  selector: 'app-question-card-preview',
  templateUrl: './question-card-preview.component.html',
  styleUrls: ['./question-card-preview.component.scss'],
})
export class QuestionCardPreviewComponent implements OnInit {
  @Input() question: Question;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  onEdit() {
    this.router.navigate([`/${path.edit_question}`, this.question.id]);
  }

  onDelete() {
    this.questionService.removeQuestion(this.question.id);
  }

  ngOnInit(): void {}
}
