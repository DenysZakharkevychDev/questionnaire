import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { QuestionManagementRoutingModule } from './question-management-routing.module';
import { QuestionManagementComponent } from './question-management.component';

@NgModule({
  declarations: [QuestionManagementComponent],
  imports: [
    CommonModule,
    QuestionManagementRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class QuestionManagementModule {}
