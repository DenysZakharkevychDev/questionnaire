import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../../shared/components/material-ui/material-ui.module';
import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';

@NgModule({
  declarations: [CreateQuestionComponent],
  imports: [CommonModule, CreateQuestionRoutingModule, MaterialUiModule],
})
export class CreateQuestionModule {}
