import { Component, OnInit } from '@angular/core';
import { QuestionConstructorFormMode } from './../../enums/question-constructor-form-mode.enum';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  QuestionConstructorFormMode = QuestionConstructorFormMode;
  constructor() {}

  ngOnInit(): void {}
}
