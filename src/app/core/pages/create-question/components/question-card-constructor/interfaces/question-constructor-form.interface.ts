import { QuestionType } from './../../../../../enums/question-type.enum';
export interface IQuestionConstructorFormValues {
  selectedType: QuestionType;
  questionText: string;
  choicesOfAnswers: Array<string>;
}
