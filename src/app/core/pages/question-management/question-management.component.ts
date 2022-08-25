import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from '../../services/question.service';
import { path } from './../../constants/path.constant';
import { Question } from './../../models/question.model';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent implements OnInit {
  path = path;
  questions$: Observable<Question[]>;
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions$ = this.questionService.questions$;
  }
}
