import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionType } from '../../enums/question-type.enum';
import { QuestionService } from '../../services/question.service';
import { path } from './../../constants/path.constant';
import { IQuestionWithSingleOptionType } from './../../models/question.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  QuestionType = QuestionType;
  QuestionTypeArr = Object.values(QuestionType);
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
