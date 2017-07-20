import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './components/lazy/lazy.component';

// App routing table
export const routes: Routes = [{
  path: '',
  component: LazyComponent
}];

@NgModule({
  declarations: [ LazyComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
