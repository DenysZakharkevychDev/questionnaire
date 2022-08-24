import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { localStorageKeys } from '../constants/local-storage.constant';
import { Question } from './../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questionsSubject: BehaviorSubject<Question[]>;
  questions$: Observable<Question[]>;

  constructor() {
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
    localStorage.setItem(localStorageKeys.QUESTIONS, JSON.stringify(questions));
  }

  getQuestionsFromLocalStorage() {
    return (
      (JSON.parse(
        localStorage.getItem(localStorageKeys.QUESTIONS) as string
      ) as Question[]) || []
    );
  }
}
