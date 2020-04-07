import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'heroes/edit/:id',
    component: HeroEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
