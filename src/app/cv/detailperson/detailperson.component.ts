import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../services/cv.service';

const LINK = ['cv'] ;

@Component({
  selector: 'app-detailperson',
  templateUrl: './detailperson.component.html',
  styleUrls: ['./detailperson.component.css']
})
export class DetailpersonComponent implements OnInit {
  personne : Personne;

  constructor(
    private activatedroute : ActivatedRoute,
    private cvService : CvService,
    private router : Router,
    private http : HttpClient
    ) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (params) => {
              this.cvService.getPersonnebyid(params.id).subscribe(
              (personne )=> this.personne = personne,
              (erreur)=> this.router.navigate(LINK)
      );
     }
    );
  }


  deletepersonne()
  {
   if(this.cvService.deletepersonne(this.personne))
   {
     this.router.navigate(LINK)
   }
  }

}
