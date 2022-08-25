import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { path } from '../../../../constants/path.constant';
import { QuestionType } from '../../../../enums/question-type.enum';
import { IQuestionWithSingleOptionType } from '../../../../models/question.model';
import { QuestionService } from '../../../../services/question.service';
import { getRequiredErrorMsg } from '../../../../utils/validation.util';
import { localStorageKeys } from './../../../../constants/local-storage.constant';
import { LocalStorageService } from './../../../../services/local-storage.service';
import { IQuestionConstructorFormValues } from './interfaces/question-constructor-form.interface';

@Component({
  selector: 'app-question-card-constructor',
  templateUrl: './question-card-constructor.component.html',
  styleUrls: ['./question-card-constructor.component.scss'],
})
export class QuestionCardConstructorComponent implements OnInit {
  form: FormGroup;
  formInitialValues: IQuestionConstructorFormValues = {
    selectedType: QuestionType.SINGLE_CHOICE,
    questionText: '',
    choicesOfAnswers: ['answer1'],
  };
  QuestionType = QuestionType;
  QuestionTypeArr = Object.values(QuestionType);

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const questionConstructorFormValues: IQuestionConstructorFormValues =
      this.localStorageService.getFromLocalStorage(
        localStorageKeys.QUESTION_CONSTRUCTOR_FORM_VALUES
      );

    const formValues: IQuestionConstructorFormValues =
      questionConstructorFormValues || this.formInitialValues;

    this.form = this.fb.group({
      selectedType: [formValues.selectedType],
      questionText: [formValues.questionText, [Validators.required]],
      choicesOfAnswers: this.fb.array([['answer1', Validators.required]]),
    });
    this.form.valueChanges.subscribe((data) => {
      this.localStorageService.setToLocalStorage(
        localStorageKeys.QUESTION_CONSTRUCTOR_FORM_VALUES,
        data
      );
    });
  }

  public get selectedTypeFormControl(): FormControl {
    return this.form.get('selectedType') as FormControl;
  }

  public get questionTextFormControl(): FormControl {
    return this.form.get('questionText') as FormControl;
  }

  public get choicesOfAnswersFormArray(): FormArray {
    return this.form.get('choicesOfAnswers') as FormArray;
  }

  public get questionTextErrorMsg(): string {
    if (this.questionTextFormControl.hasError('required')) {
      return getRequiredErrorMsg('question text');
    }
    return '';
  }

  removeChoiceOfAnswer(index: number) {
    console.log(index);
    this.choicesOfAnswersFormArray.removeAt(index);
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  addChoiceOfAnswer() {
    const choicesOfAnswersArrayLenght = this.choicesOfAnswersFormArray.length;
    const indexOfAnswer = choicesOfAnswersArrayLenght + 1;
    this.choicesOfAnswersFormArray.push(
      new FormControl('answer' + `${indexOfAnswer}`, Validators.required)
    );
  }

  onSubmit() {
    const question: IQuestionWithSingleOptionType = {
      creationDate: new Date(),
      type: this.selectedTypeFormControl.value,
      text: this.questionTextFormControl.value,
      choicesOfAnswers: this.choicesOfAnswersFormArray.value,
    };
    this.questionService.addQuestion(question);
    this.router.navigate([`/${path.QUESTION_MANAGEMENT}`]);
  }
}
