import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionCardConstructorModule } from './../create-question/components/question-card-constructor/question-card-constructor.module';
import { EditQuestionRoutingModule } from './edit-question-routing.module';
import { EditQuestionComponent } from './edit-question.component';

@NgModule({
  declarations: [EditQuestionComponent],
  imports: [
    CommonModule,
    EditQuestionRoutingModule,
    QuestionCardConstructorModule,
  ],
})
export class EditQuestionModule {}
