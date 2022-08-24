import { NgModule } from '@angular/core';
import { MaterialUiModule } from './components/material-ui/material-ui.module';
import { NavbarModule } from './components/navbar/navbar.module';

const modules = [MaterialUiModule, NavbarModule];
@NgModule({
  imports: [modules],
  exports: [modules],
})
export class SharedModule {}
