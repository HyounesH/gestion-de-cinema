export class Personne {

  constructor(private _id_personne?:Number,
              private _nom?:string,
              private _prenom?:string,
              private _tel?:string,
              private _photo?:string,
              private _mail?:string,
              private _username?:string,
              private _password?:string){}

  get id_personne(){
    return this._id_personne;
  }
  get nom(){
    return this._nom;
  }
  set nom(value:string){
    this._nom=value;
  }
  get prenom(){
    return this._prenom;
  }
  set prenom(value:string){
    this._prenom=value;
  }
  get tel(){
    return this._tel;
  }
  set tel(value:string){
    this._tel=value;
  }
  get mail(){
    return this._mail;
  }
  set mail(value:string){
    this._mail=value;
  }
  get photo(){
    return this._photo;
  }
  set photo(value:string){
    this._photo=value;
  }
  get username(){
    return this._username;
  }
  set username(value:string){
    this._username=value;
  }
  get password(){
    return this._password;
  }
  set password(value:string){
    this._password=value;
  }

}
