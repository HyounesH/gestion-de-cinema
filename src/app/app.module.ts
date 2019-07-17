import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FilmService } from './services/film.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ListFilmsComponent } from './list-films/list-films.component';
import { ListActeursComponent } from './list-acteurs/list-acteurs.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilmDetailsComponent,
    LoginComponent,
    ListFilmsComponent,
    ListActeursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    FormsModule

  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
