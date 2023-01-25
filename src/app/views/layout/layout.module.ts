import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainlayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
