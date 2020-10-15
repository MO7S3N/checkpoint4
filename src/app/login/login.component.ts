import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { AuthentificationService } from '../services/authentification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService:AuthentificationService,
    private router:Router) { }

  ngOnInit(): void {
  }
  login(loginForm : NgForm)
  {
   this.authentificationService.login(loginForm.value).subscribe(
     (data)=>{
                localStorage.setItem('token',data.id);
                this.router.navigate(['cv']);
     },
     (erreur)=>console.log(erreur)
   );
  }
}
