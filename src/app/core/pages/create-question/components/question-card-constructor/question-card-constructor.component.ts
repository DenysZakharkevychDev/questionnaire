import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { question } from '../../../../constants/question.constant';
import { QuestionType } from '../../../../enums/question-type.enum';
import { getRequiredErrorMsg } from '../../../../utils/validation.util';
import { QuestionConstructorFormMode } from './../../../../enums/question-constructor-form-mode.enum';
import { QuestionConstructorService } from './../../../../services/question-constructor.service';

@Component({
  selector: 'app-question-card-constructor',
  templateUrl: './question-card-constructor.component.html',
  styleUrls: ['./question-card-constructor.component.scss'],
})
export class QuestionCardConstructorComponent implements OnInit, OnDestroy {
  form: FormGroup;
  QuestionType = QuestionType;
  questionTypeArr = question.questionTypeArr;
  questionId: string | null;
  unsubscribe$ = new Subject<void>();

  @Input() mode: QuestionConstructorFormMode;
  @Input() sumbitButtonText: string;

  constructor(
    private questionConstructorService: QuestionConstructorService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: ParamMap) => {
        this.questionId = params.get('id');
      });
    this.questionConstructorService.setQuestionId(this.questionId as string);
    this.form = this.questionConstructorService.getForm(this.mode);
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

  removeChoiceOfAnswer(index: number) {
    this.choicesOfAnswersFormArray.removeAt(index);
    this.changeDetectorRef.detectChanges();
  }

  onSubmit() {
    this.questionConstructorService.onSubmit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
