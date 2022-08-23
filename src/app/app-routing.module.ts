import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { path } from './core/constants/path.constant';

const routes: Routes = [
  { path: '', redirectTo: path.QUESTION_MANAGEMENT, pathMatch: 'full' },
  {
    path: path.QUESTION_MANAGEMENT,
    loadChildren: () =>
      import(
        './core/pages/question-management/question-management.module'
      ).then((m) => m.QuestionManagementModule),
  },
  {
    path: path.CREATE_QUESTION,
    loadChildren: () =>
      import('./core/pages/create-question/create-question.module').then(
        (m) => m.CreateQuestionModule
      ),
  },
  {
    path: path.EDIT_QUESTION,
    loadChildren: () =>
      import('./core/pages/edit-question/edit-question.module').then(
        (m) => m.EditQuestionModule
      ),
  },
  {
    path: path.LIST_OF_QUESTIONS,
    loadChildren: () =>
      import('./core/pages/list-of-questions/list-of-questions.module').then(
        (m) => m.ListOfQuestionsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
