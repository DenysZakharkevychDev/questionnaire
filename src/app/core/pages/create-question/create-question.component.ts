import { Component, OnInit } from '@angular/core';
import { QuestionConstructorFormMode } from './../../enums/question-constructor-form-mode.enum';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  QuestionConstructorFormMode = QuestionConstructorFormMode;
  constructor() {}

  ngOnInit(): void {}
}
