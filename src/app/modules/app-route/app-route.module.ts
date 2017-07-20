import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from '../../components/content/content.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { AboutComponent } from '../../components/about/about.component';

// App routing table
export const routes: Routes = [{
  path: '',
  component: ContentComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'test',
  loadChildren: '../lazy/lazy.module#LazyModule'
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
