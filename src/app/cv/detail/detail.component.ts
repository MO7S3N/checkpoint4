import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne : Personne;
  constructor(
     private EmbaucherService: EmbaucheService,
     private router : Router,
     private CvService : CvService
    )
   { }

  ngOnInit(): void {
    this.CvService.selectitemsubject.subscribe(
      (personne : Personne) => this.personne = personne
    );
  }

  embaucher()
  {
    this.EmbaucherService.embaucher(this.personne);
  }
  gotodetail()
  {
   const LINK = ['cv', this.personne.id];
   this.router.navigate(LINK);
  }

}
