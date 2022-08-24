import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../../../../../shared/components/material-ui/material-ui.module';
import { QuestionCardFormComponent } from './question-card-form.component';

@NgModule({
  declarations: [QuestionCardFormComponent],
  imports: [CommonModule, MaterialUiModule, ReactiveFormsModule],
  exports: [QuestionCardFormComponent],
})
export class QuestionCardFormModule {}
