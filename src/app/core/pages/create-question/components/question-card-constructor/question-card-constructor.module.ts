import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionCardFormModule } from './../question-card-form/question-card-form.module';
import { QuestionTypeSelectorModule } from './../question-type-selector/question-type-selector.module';
import { QuestionCardConstructorComponent } from './question-card-constructor.component';

@NgModule({
  declarations: [QuestionCardConstructorComponent],
  imports: [CommonModule, QuestionTypeSelectorModule, QuestionCardFormModule],
  exports: [QuestionCardConstructorComponent],
})
export class QuestionCardConstructorModule {}
