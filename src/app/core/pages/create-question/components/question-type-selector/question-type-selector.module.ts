import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialUiModule } from './../../../../../shared/components/material-ui/material-ui.module';
import { QuestionTypeSelectorComponent } from './question-type-selector.component';

@NgModule({
  declarations: [QuestionTypeSelectorComponent],
  imports: [CommonModule, MaterialUiModule, FormsModule],
  exports: [QuestionTypeSelectorComponent],
})
export class QuestionTypeSelectorModule {}
