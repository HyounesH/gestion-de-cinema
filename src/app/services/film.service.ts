import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Film } from '../entities/film';

@Injectable()
export class FilmService {
  private baseUrl:string='http://localhost:8002/yosamo';
  private headers =new Headers({"Content-Type":"application/json"});
  private options=new RequestOptions({headers:this.headers});
  private _nbreAdherent:number;
  private _film:Film
  constructor(private _http:Http) { }
  getFilms(){
    return this._http.get(this.baseUrl+'/film',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  getFilm(id:Number){
    return this._http.get(this.baseUrl+'/film/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  login(username:string,password:string){
    return this._http.get(this.baseUrl+'/film/login/'+username+'/'+password,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  reserveTicket(id_film:number,nb_ticket:number){
    return this._http.get(this.baseUrl+'/film/ticket/'+id_film+'/'+nb_ticket,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  saveFilm(film:Film){
    return this._http.post(this.baseUrl+'/film',this.filmToJson(film),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  updateFilm(film:Film){
    return this._http.put(this.baseUrl+'/film',this.updateJsonFilm(film),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  delFilm(id:Number){
    return this._http.delete(this.baseUrl+'/film/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  deleteActeur(id:Number){
    return this._http.delete(this.baseUrl+'/film/acteur/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  filmToJson(film:Film){
    return {titre:film.titre,description:film.description,affiche:film.affiche,prix:film.prix,
           realisateur:film.realisateur,date_debut:film.date_debut,genre:film.genre,heure_debut:film.heure_debut,heure_fin:film.heure_fin,numero_salle:film.numero_salle,
           nombre_places:film.nombre_places,acteurs:film.acteurs}
  }
  updateJsonFilm(film:Film){
    return {id_film:film.id_film,titre:film.titre,description:film.description,affiche:film.affiche,prix:film.prix,
      realisateur:film.realisateur,date_debut:film.date_debut,genre:film.genre,heure_debut:film.heure_debut,heure_fin:film.heure_fin,numero_salle:film.numero_salle,
      nombre_places:film.nombre_places,acteurs:film.acteurs}
  }
  errorHandler(error:Response){
    return Observable.throw(error || "SERVER ERROR");
 }

}
