import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialUiModule } from './../../../shared/components/material-ui/material-ui.module';
import { MultipleOptionAnswerConstructorModule } from './components/multiple-option-answer-constructor/multiple-option-answer-constructor.module';
import { OpenOptionAnswerConstructorModule } from './components/open-option-answer-constructor/open-option-answer-constructor.module';
import { QuestionCardConstructorModule } from './components/question-card-constructor/question-card-constructor.module';
import { SingleOptionAnswerConstructorModule } from './components/single-option-answer-constructor/single-option-answer-constructor.module';
import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    MaterialUiModule,
    FormsModule,
    QuestionCardConstructorModule,
    SingleOptionAnswerConstructorModule,
    MultipleOptionAnswerConstructorModule,
    OpenOptionAnswerConstructorModule,
  ],
})
export class CreateQuestionModule {}
