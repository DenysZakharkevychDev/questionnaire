import { QuestionType } from '../enums/question-type.enum';
export interface IQuestion {
  id: string;
  creationDate: Date;
  type: QuestionType;
  text: string;
}

export interface IAddQuestionData extends Pick<IQuestion, 'type' | 'text'> {
  choicesOfAnswers?: string[];
}

export interface IEditQuestionData extends Pick<IQuestion, 'type' | 'text'> {
  choicesOfAnswers?: string[];
}

export interface IQuestionWithSingleOptionType extends IQuestion {
  choicesOfAnswers: string[];
}

export interface IQuestionWithMultipleOptionType extends IQuestion {
  choicesOfAnswers: string[];
}

export interface IQuestionWithOpenOptionType extends IQuestion {}

export interface IAnsweredQuestionWithSingleOptionType
  extends IQuestionWithSingleOptionType {
  answers: string[];
}

export interface IAnsweredQuestionWithMultipleOptionType
  extends IQuestionWithMultipleOptionType {
  answers: string[];
}

export interface IAnsweredQuestionWithOpenOptionType
  extends IQuestionWithOpenOptionType {
  answer: string;
}

export type Question =
  | IQuestionWithSingleOptionType
  | IQuestionWithMultipleOptionType
  | IQuestionWithOpenOptionType;

export type AnsweredQuestion =
  | IAnsweredQuestionWithSingleOptionType
  | IAnsweredQuestionWithMultipleOptionType
  | IAnsweredQuestionWithOpenOptionType;
