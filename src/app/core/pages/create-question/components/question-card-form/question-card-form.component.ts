import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getRequiredErrorMsg } from '../../../../utils/validation.util';

@Component({
  selector: 'app-question-card-form',
  templateUrl: './question-card-form.component.html',
  styleUrls: ['./question-card-form.component.scss'],
})
export class QuestionCardFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    questionText: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}

  public get questionTextFormControl(): FormControl {
    return this.form.get('questionText') as FormControl;
  }

  public get questionTextErrorMsg(): string {
    if (this.questionTextFormControl.hasError('required')) {
      return getRequiredErrorMsg('question text');
    }
    return '';
  }

  onSubmit() {}
}
