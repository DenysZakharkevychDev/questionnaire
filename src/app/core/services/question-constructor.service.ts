import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { localStorageKeys } from '../constants/local-storage.constant';
import { Question } from '../models/question.model';
import { path } from './../constants/path.constant';
import { QuestionConstructorFormMode } from './../enums/question-constructor-form-mode.enum';
import {
  IAddQuestionData,
  IEditQuestionData,
} from './../models/question.model';
import { formInitialValues } from './../pages/create-question/components/question-card-constructor/constants/form.constant';
import { IQuestionConstructorFormValues } from './../pages/create-question/components/question-card-constructor/interfaces/question-constructor-form.interface';
import { getRequiredErrorMsg } from './../utils/validation.util';
import { LocalStorageService } from './local-storage.service';
import { QuestionService } from './question.service';

@Injectable()
export class QuestionConstructorService {
  form: FormGroup;
  questionId: string;
  questions: Question[];
  mode: QuestionConstructorFormMode;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.questionService.questions$.subscribe(
      (questions) => (this.questions = questions)
    );
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

  setQuestionId(questionId: string) {
    this.questionId = questionId;
  }

  removeChoiceOfAnswer(index: number) {
    this.choicesOfAnswersFormArray.removeAt(index);
  }

  private setConstructorMode(mode: QuestionConstructorFormMode) {
    this.mode = mode;
  }

  getForm(mode: QuestionConstructorFormMode): FormGroup {
    this.setConstructorMode(mode);
    const formValues = this.getFormValues();
    const form = this.createForm(formValues);
    this.form = form;
    return form;
  }

  private createForm(formValues: IQuestionConstructorFormValues): FormGroup {
    const form = this.formBuilder.group({
      selectedType: [formValues.selectedType, Validators.required],
      questionText: [formValues.questionText, Validators.required],
      choicesOfAnswers: this.formBuilder.array([
        ['answer1', Validators.required],
      ]),
    });
    form.valueChanges.subscribe((data) => {
      this.localStorageService.setToLocalStorage(
        localStorageKeys.question_constructor_form_values,
        data
      );
    });
    return form;
  }

  private getFormValues(): IQuestionConstructorFormValues {
    let formValues: IQuestionConstructorFormValues;
    if (this.mode === QuestionConstructorFormMode.CREATE) {
      formValues = this.getFormValuesForCreateQuestionMode();
    } else if (this.mode === QuestionConstructorFormMode.EDIT) {
      formValues = this.getFormValuesForEditQuestionMode();
    } else {
      formValues = formInitialValues;
    }
    return formValues;
  }

  private getFormValuesForCreateQuestionMode(): IQuestionConstructorFormValues {
    const questionConstructorFormValues: IQuestionConstructorFormValues =
      this.localStorageService.getFromLocalStorage(
        localStorageKeys.question_constructor_form_values
      );
    return questionConstructorFormValues;
  }

  private getFormValuesForEditQuestionMode(): IQuestionConstructorFormValues {
    const question: Question = this.questions.find(
      (q) => q.id === this.questionId
    ) as Question;
    const questionConstructorFormValues: IQuestionConstructorFormValues = {
      selectedType: question.type,
      questionText: question.text,
      choicesOfAnswers: ['answer1'],
    };
    return questionConstructorFormValues;
  }

  addQuestion() {
    const addQuestionData: IAddQuestionData = {
      type: this.selectedTypeFormControl.value,
      text: this.questionTextFormControl.value,
      choicesOfAnswers: this.choicesOfAnswersFormArray.value,
    };
    this.questionService.addQuestion(addQuestionData);
    this.router.navigate([`/${path.question_management}`]);
  }

  editQuestion() {
    const editQuestionData: IEditQuestionData = {
      type: this.selectedTypeFormControl.value,
      text: this.questionTextFormControl.value,
      choicesOfAnswers: this.choicesOfAnswersFormArray.value,
    };
    this.questionService.editQuestion(this.questionId, editQuestionData);
    this.router.navigate([`/${path.question_management}`]);
  }

  onSubmit() {
    if (this.mode === QuestionConstructorFormMode.CREATE) {
      this.addQuestion();
    } else if (this.mode === QuestionConstructorFormMode.EDIT) {
      this.editQuestion();
    }
  }
}
