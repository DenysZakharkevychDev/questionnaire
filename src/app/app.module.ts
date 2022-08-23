import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementComponent } from './core/pages/question-management/question-management.component';
import { CreateQuestionComponent } from './core/pages/create-question/create-question.component';
import { EditQuestionComponent } from './core/pages/edit-question/edit-question.component';
import { ListOfQuestionsComponent } from './core/pages/list-of-questions/list-of-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    ListOfQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
