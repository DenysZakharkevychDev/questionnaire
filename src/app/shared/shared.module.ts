import { NgModule } from '@angular/core';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  imports: [NavbarModule],
  exports: [NavbarModule],
})
export class SharedModule {}
