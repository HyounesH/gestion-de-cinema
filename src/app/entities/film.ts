export class Film {
  constructor(private _id_film ?:number,
              private _titre?:string ,
              private _description?:string,
              private _genre ?:string,
              private _affiche ?:string,
              private _numero_salle?:Number,
              private _nombre_places?:number,
              private _date_debut ?:Date,
              private _heure_debut?:string,
              private _heure_fin?:string,
              private _prix?:number,
              private _realisateur?:string,
              private _acteurs?:string,
              private _nombre_ticket?:number
              ){

  }
  get id_film(){
    return this._id_film;
  }
  get titre(){
    return this._titre;
  }
  set titre(value:string){
    this._titre=value;
  }
  get description(){
    return this._description;
  }
  set description(value:string){
    this._description=value;
  }
  get genre(){
    return this._genre;
  }
  set genre(value:string){
    this._genre=value;
  }
  get affiche(){
    return this._affiche;
  }
  set affiche(value:string){
    this._affiche=value;
  }
  get numero_salle(){
    return this._numero_salle;
  }
  set numero_salle(value:Number){
    this._numero_salle=value;
  }
  get nombre_places(){
    return this._nombre_places;
  }
  set nombre_places(value:number){
   this._nombre_places=value;
  }
  get date_debut(){
    return this._date_debut;
  }
  set date_debut(value:Date){
    this._date_debut=value;
  }
  get heure_debut(){
    return this._heure_debut;
  }
  set heure_debut(value:string){
    this._heure_debut=value;
  }
  get heure_fin(){
    return this._heure_fin;
  }
  set heure_fin(value:string){
    this._heure_fin=value;
  }
  get prix(){
    return this._prix;
  }
  set prix(value:number){
    this._prix=value;
  }
  get realisateur(){
    return this._realisateur;
  }
  set realisateur(value:string){
    this._realisateur=value;
  }
  get acteurs(){
    return this._acteurs;
  }
  set acteurs(value:string){
    this._acteurs=value;
  }
  get nombre_ticket(){
    return this._nombre_ticket;
  }
  set nombre_ticket(value:number){
    this._nombre_ticket=value;
  }




}
