import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionType } from './../../../../enums/question-type.enum';

@Component({
  selector: 'app-question-type-selector',
  templateUrl: './question-type-selector.component.html',
  styleUrls: ['./question-type-selector.component.scss'],
})
export class QuestionTypeSelectorComponent implements OnInit {
  QuestionTypeArr = Object.values(QuestionType);

  @Input()
  selectedType: QuestionType;

  @Output()
  selectedTypeChange = new EventEmitter<QuestionType>();
  constructor() {}

  ngOnInit(): void {}
}
