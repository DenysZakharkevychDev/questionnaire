import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { localStorageKeys } from '../constants/local-storage.constant';
import { Question } from './../models/question.model';
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

  addQuestion(question: Question) {
    const questions = this.questionsSubject.getValue();
    this.questionsSubject.next([...questions, question]);
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
