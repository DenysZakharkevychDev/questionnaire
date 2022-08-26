import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './../../../../../shared/components/material-ui/material-ui.module';
import { QuestionConstructorService } from './../../../../services/question-constructor.service';
import { QuestionCardConstructorComponent } from './question-card-constructor.component';

@NgModule({
  declarations: [QuestionCardConstructorComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule],
  exports: [QuestionCardConstructorComponent],
  providers: [QuestionConstructorService],
})
export class QuestionCardConstructorModule {}
