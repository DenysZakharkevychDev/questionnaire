import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialUiModule {}
