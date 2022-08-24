import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { path } from '../../../../constants/path.constant';
import { QuestionType } from '../../../../enums/question-type.enum';
import { IQuestionWithSingleOptionType } from '../../../../models/question.model';
import { QuestionService } from '../../../../services/question.service';

@Component({
  selector: 'app-question-card-constructor',
  templateUrl: './question-card-constructor.component.html',
  styleUrls: ['./question-card-constructor.component.scss'],
})
export class QuestionCardConstructorComponent implements OnInit {
  QuestionType = QuestionType;
  selectedType: QuestionType = QuestionType.SINGLE_CHOICE;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createQuestion() {
    const question: IQuestionWithSingleOptionType = {
      creationDate: new Date(),
      type: QuestionType.SINGLE_CHOICE,
      text: 'Дано трикутник АВС. ВD – бісектриса трикутника, ∠BAC = 60°, ∠CBD = 35°',
      choicesOfAnswers: ['First choice', 'Second choice'],
    };
    this.questionService.addQuestion(question);
    this.router.navigate([`/${path.QUESTION_MANAGEMENT}`]);
  }
}
