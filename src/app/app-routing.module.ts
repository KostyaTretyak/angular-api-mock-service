import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleEditComponent } from './simple-edit/simple-edit.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SimpleComponent,
  },
  {
    path: 'edit/:id',
    component: SimpleEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
