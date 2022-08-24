import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialUiModule } from './../../../shared/components/material-ui/material-ui.module';
import { QuestionCardConstructorModule } from './components/question-card-constructor/question-card-constructor.module';
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
  ],
})
export class CreateQuestionModule {}
