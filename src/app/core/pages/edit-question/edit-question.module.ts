import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditQuestionRoutingModule } from './edit-question-routing.module';
import { EditQuestionComponent } from './edit-question.component';

@NgModule({
  declarations: [EditQuestionComponent],
  imports: [CommonModule, EditQuestionRoutingModule],
})
export class EditQuestionModule {}
