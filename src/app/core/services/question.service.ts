import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { localStorageKeys } from '../constants/local-storage.constant';
import { ICreateQuestionData, Question } from './../models/question.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questionsSubject: BehaviorSubject<Question[]>;
  questions$: Observable<Question[]>;

  constructor(private localStorageService: LocalStorageService) {
    const questions = this.getQuestionsFromLocalStorage();
    this.questionsSubject = new BehaviorSubject(questions);
    this.questions$ = this.questionsSubject.asObservable();
    this.questions$.subscribe(() => {
      this.setQuestionsToLocalStorage();
    });
  }

  addQuestion(createQuestionData: ICreateQuestionData) {
    const newQuestion: Question = {
      id: uuidv4(),
      creationDate: new Date(),
      ...createQuestionData,
    };
    const questions = this.questionsSubject.getValue();
    this.questionsSubject.next([...questions, newQuestion]);
  }

  removeQuestion(id: string) {
    const questions = this.questionsSubject.getValue();
    const newQuestionsArray = questions.filter(
      (question) => question.id !== id
    );
    this.questionsSubject.next(newQuestionsArray);
  }

  setQuestionsToLocalStorage() {
    const questions = this.questionsSubject.getValue();
    this.localStorageService.setToLocalStorage(
      localStorageKeys.QUESTIONS,
      questions
    );
  }

  getQuestionsFromLocalStorage(): Question[] {
    return (
      (this.localStorageService.getFromLocalStorage(
        localStorageKeys.QUESTIONS
      ) as Question[]) || []
    );
  }
}
