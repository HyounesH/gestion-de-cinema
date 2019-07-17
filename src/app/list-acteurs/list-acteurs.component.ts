import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Personne } from '../entities/personne';

@Component({
  selector: 'app-list-acteurs',
  templateUrl: './list-acteurs.component.html',
  styleUrls: ['./list-acteurs.component.css']
})
export class ListActeursComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  public acteurs:Personne[];
  private actDelete:Personne;
  public currentUser:string=""
  public acteur:Personne=new Personne();
  constructor(private _filmService:FilmService,private _router:Router) { }

  ngOnInit() {
    this.currentUser=sessionStorage.getItem('login');
  }
  dashboard(){
    this._router.navigateByUrl("/film/ad/dashboard");
  }
  putActeurToDelete(acteur:Personne){
    this.actDelete=new Personne();
    this.actDelete=acteur;
  }
  deleteActeur(){
  this._filmService.deleteActeur(this.actDelete.id_personne).subscribe((data)=>{
    this.acteurs.slice(this.acteurs.indexOf(this.actDelete),1);
  },(error)=>{
    console.log(error);
  });
  this.closeModal.nativeElement.click();
  window.location.reload();
  }
  putUpdateActeur(acteur:Personne){
    this.acteur=acteur;
  }
  putNewActeur(){
    this.acteur=new Personne();
  }
  updateActeur(){
  }
  addActeur(){

  }
}
