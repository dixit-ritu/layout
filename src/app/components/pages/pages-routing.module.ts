import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutsComponent } from '../layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
          path: '',
          component: ContactComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
