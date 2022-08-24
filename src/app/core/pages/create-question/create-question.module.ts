import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionCardConstructorModule } from './components/question-card-constructor/question-card-constructor.module';
import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    QuestionCardConstructorModule,
  ],
})
export class CreateQuestionModule {}
