import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './../../material-ui/material-ui.module';
import { QuestionCardPreviewComponent } from './question-card-preview.component';

@NgModule({
  declarations: [QuestionCardPreviewComponent],
  imports: [CommonModule, MaterialUiModule],
  exports: [QuestionCardPreviewComponent],
})
export class QuestionCardPreviewModule {}
