import { QuestionType } from './../enums/question-type.enum';
export interface ICard {
  creationDate: Date;
  type: QuestionType;
  text: string;
}
