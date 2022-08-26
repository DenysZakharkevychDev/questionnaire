import { QuestionType } from '../../../../../enums/question-type.enum';
import { IQuestionConstructorFormValues } from '../interfaces/question-constructor-form.interface';

export const formInitialValues: IQuestionConstructorFormValues = {
  selectedType: QuestionType.SINGLE_CHOICE,
  questionText: '',
  choicesOfAnswers: ['answer1'],
};
