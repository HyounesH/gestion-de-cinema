import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { LoginComponent } from './login/login.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { ListActeursComponent } from './list-acteurs/list-acteurs.component';

const routes: Routes = [
  {
  path: '',
  component: IndexComponent
},
{
  path:'film/:id',
  component:FilmDetailsComponent
},
{
  path:'film/ad/login',
  component:LoginComponent
},
{
  path:'film/ad/dashboard',
  component:ListFilmsComponent
},
{
  path:'film/ad/dashboard/acteurs',
  component:ListActeursComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
