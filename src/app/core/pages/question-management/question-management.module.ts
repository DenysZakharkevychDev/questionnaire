import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from './../../../shared/components/material-ui/material-ui.module';
import { QuestionCardPreviewModule } from './components/question-card-preview/question-card-preview.module';
import { QuestionManagementRoutingModule } from './question-management-routing.module';
import { QuestionManagementComponent } from './question-management.component';

@NgModule({
  declarations: [QuestionManagementComponent],
  imports: [
    CommonModule,
    QuestionManagementRoutingModule,
    RouterModule,
    QuestionCardPreviewModule,
    MaterialUiModule,
  ],
})
export class QuestionManagementModule {}
