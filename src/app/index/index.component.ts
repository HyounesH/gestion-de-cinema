
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Film } from '../entities/film';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  public listfilm:Film[];
  private _film:Film=new Film();
  public nombre_ticket:number;
  constructor(private _filmService:FilmService,private _router:Router) { }

  ngOnInit() {
    this._filmService.getFilms().subscribe((films)=>{
     console.log(films)
     this.listfilm=films;
    },(error)=>{
    console.log(error)
    });
  }
  details(id_film:Number){
    this._router.navigateByUrl("film/"+id_film);
  }
  getTicket(film:Film){
  this._film=film;
  }

  getTickets(){
    console.log(this._film.nombre_ticket);
  if((this._film.nombre_ticket+this.nombre_ticket)<=this._film.nombre_places){
   this._filmService.reserveTicket(this._film.id_film,this.nombre_ticket).subscribe((data)=>{
   console.log(data);
   },(error)=>{
     console.log(error);
   });
   this.closeModal.nativeElement.click();
     alert("vous places a été bien réserv")
   }else{
     alert("pas de places disponible !")
   }
   }

}
