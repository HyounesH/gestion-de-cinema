import { Router } from '@angular/router';
import { Component, OnInit ,ElementRef ,ViewChild } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../entities/film';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  constructor(private _filmService:FilmService,private _router:Router) { }
  public currentUser:string=""
  public film:Film=new Film();
  public films:Film[];
  private filmDel:Film;
  ngOnInit() {
   this.currentUser=sessionStorage.getItem('login');
   this._filmService.getFilms().subscribe((data)=>{
   this.films=data;
   console.log(data);
   },(error)=>{
    console.log(error);
   });
  }
  acteurs(){
    this._router.navigateByUrl("localhost:8002/film/ad/dashboard/acteurs");
  }
  putFilmToDelete(film:Film){
    this.filmDel=new Film();
    this.filmDel=film;
  }
  putUpdateFilm(flm:Film){
    this.film=flm;
  }
  putNewFilm(){
    this.film=new Film();
  }
  deleteFilm(){
    this._filmService.delFilm(this.filmDel.id_film).subscribe((data)=>{
      this.films.slice(this.films.indexOf(this.filmDel),1);
    },(error)=>{
      console.log(error);
    });
    this.closeModal.nativeElement.click();
    window.location.reload();
  }
  addFilm(){
   this._filmService.saveFilm(this.film).subscribe((data)=>{
     console.log(data);
   },(error)=>{
     console.log(error);
   });
   this.closeModal.nativeElement.click();
   window.location.reload();
  }
  updateFilm(){
    this._filmService.updateFilm(this.film).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    });
    this.closeModal.nativeElement.click();
    window.location.reload();
  }


  filmDetails(film:Film){
    this._router.navigate(['film',film.id_film]);
  }
}
