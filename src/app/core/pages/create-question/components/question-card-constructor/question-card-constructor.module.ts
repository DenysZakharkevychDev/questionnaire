import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './../../../../../shared/components/material-ui/material-ui.module';
import { QuestionCardConstructorComponent } from './question-card-constructor.component';

@NgModule({
  declarations: [QuestionCardConstructorComponent],
  imports: [CommonModule, MaterialUiModule, ReactiveFormsModule],
  exports: [QuestionCardConstructorComponent],
})
export class QuestionCardConstructorModule {}
