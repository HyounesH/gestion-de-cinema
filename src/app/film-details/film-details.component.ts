import { Film } from './../entities/film';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from '../entities/personne';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  public film:Film=new Film();
  public id:Number;
  public acteurs:Personne[];
  constructor(private _filmService:FilmService,private _router:Router,private _activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id=Number.parseInt(this._activateRouter.snapshot.paramMap.get('id'),10);
    this._filmService.getFilm(this.id).subscribe((data)=>{
     console.log(data);
     this.film=data;
    },(error)=>{
      console.log(error);
    })
  }

  back(){
    this._router.navigateByUrl("/");
  }
  accueil(){
    this._router.navigateByUrl("/");
  }

}
