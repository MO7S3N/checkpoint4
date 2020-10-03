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
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params =>
    {
      this.personne = this.cvService.getPersonnebyid(params.id);
      if(!this.personne)
        {

          this.router.navigate(LINK);
        }
    });
  }

  deletepersonne()
  {
   if(this.cvService.deletepersonne(this.personne))
   {
     this.router.navigate(LINK)
   }
  }

}
