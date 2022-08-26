import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { localStorageKeys } from '../constants/local-storage.constant';
import {
  IAddQuestionData,
  IEditQuestionData,
  Question,
} from './../models/question.model';
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

  getQuestions() {
    const questions = this.questionsSubject.getValue();
    return [...questions];
  }

  getQuestionIndexById(id: string) {
    const questions = this.getQuestions();
    const index = questions.findIndex((q) => q.id === id);
    return index;
  }

  addQuestion(addQuestionData: IAddQuestionData) {
    const newQuestion: Question = {
      id: uuidv4(),
      creationDate: new Date(),
      ...addQuestionData,
    };
    const questions = this.getQuestions();
    this.questionsSubject.next([...questions, newQuestion]);
  }

  editQuestion(id: string, editQuestionData: IEditQuestionData) {
    const questions = this.getQuestions();
    const indexOfQuestionToChange = this.getQuestionIndexById(id);
    questions[indexOfQuestionToChange] = {
      ...questions[indexOfQuestionToChange],
      ...editQuestionData,
    };
    this.questionsSubject.next(questions);
  }

  removeQuestion(id: string) {
    const questions = this.getQuestions();
    const newQuestionsArray = questions.filter((q) => q.id !== id);
    this.questionsSubject.next(newQuestionsArray);
  }

  setQuestionsToLocalStorage() {
    const questions = this.getQuestions();
    this.localStorageService.setToLocalStorage(
      localStorageKeys.questions,
      questions
    );
  }

  getQuestionsFromLocalStorage(): Question[] {
    return (
      (this.localStorageService.getFromLocalStorage(
        localStorageKeys.questions
      ) as Question[]) || []
    );
  }
}
