import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { path } from './core/constants/path.constant';

const routes: Routes = [
  { path: '', redirectTo: path.question_management, pathMatch: 'full' },
  {
    path: path.question_management,
    loadChildren: () =>
      import(
        './core/pages/question-management/question-management.module'
      ).then((m) => m.QuestionManagementModule),
  },
  {
    path: path.create_question,
    loadChildren: () =>
      import('./core/pages/create-question/create-question.module').then(
        (m) => m.CreateQuestionModule
      ),
  },
  {
    path: path.edit_question,
    loadChildren: () =>
      import('./core/pages/edit-question/edit-question.module').then(
        (m) => m.EditQuestionModule
      ),
  },
  {
    path: path.list_of_questions,
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
