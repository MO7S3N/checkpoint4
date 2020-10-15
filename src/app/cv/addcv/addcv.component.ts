import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-addcv',
  templateUrl: './addcv.component.html',
  styleUrls: ['./addcv.component.css']
})
export class AddcvComponent implements OnInit {

  constructor(private cvService : CvService, private router: Router) { }

  ngOnInit(): void {
  }

  addPersonne(personne: Personne)
  {  const LINK= ['cv'];
     this.cvService.addpersonne(personne).subscribe(
       (success)=>{
          const LINK= ['cv'];
          this.router.navigate(LINK);
       },
       (erreur)=>console.log(erreur)
     );

  }

}
