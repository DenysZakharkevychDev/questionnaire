import { NgModule } from '@angular/core';
import { MaterialUiModule } from './components/material-ui/material-ui.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { QuestionCardPreviewModule } from './components/question-card/question-card-preview/question-card-preview.module';

const modules = [MaterialUiModule, NavbarModule, QuestionCardPreviewModule];
@NgModule({
  imports: [modules],
  exports: [modules],
})
export class SharedModule {}
