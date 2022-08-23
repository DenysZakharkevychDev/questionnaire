import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from './../material-ui/material-ui.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialUiModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
