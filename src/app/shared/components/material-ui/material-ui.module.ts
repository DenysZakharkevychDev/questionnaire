import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [MatToolbarModule, MatButtonModule, MatCardModule];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialUiModule {}
