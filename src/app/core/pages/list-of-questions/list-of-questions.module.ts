import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListOfQuestionsRoutingModule } from './list-of-questions-routing.module';
import { ListOfQuestionsComponent } from './list-of-questions.component';

@NgModule({
  declarations: [ListOfQuestionsComponent],
  imports: [CommonModule, ListOfQuestionsRoutingModule],
})
export class ListOfQuestionsModule {}
