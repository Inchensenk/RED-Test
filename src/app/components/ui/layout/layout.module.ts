import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent,HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }