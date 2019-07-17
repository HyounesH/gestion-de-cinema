import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';
import { Personne } from '../entities/personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string="";
  public password:string="";
  private users:Personne[];
  private failed:string=""
  constructor(private _filmService:FilmService,private _router:Router) { }

  ngOnInit() {
  }
  login(){
   this._filmService.login(this.username,this.password).subscribe((data)=>{
     this.users=data;
     if(this.users.length>0){
      sessionStorage.setItem("login",this.users[0].nom+" "+this.users[0].prenom);
      this._router.navigateByUrl("/film/ad/dashboard");
     }
     else {
       this.failed="Login failed !";
     }
   },(error)=>{
     console.log(error);
   })
  }

}
