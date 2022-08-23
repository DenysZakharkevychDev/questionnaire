import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [CommonModule, CreateQuestionRoutingModule],
})
export class CreateQuestionModule {}
