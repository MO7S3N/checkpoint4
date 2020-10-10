import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Personne} from 'src/app/model/personne';
import {CvService} from '../services/cv.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes : Personne[];
  constructor(private cvService : CvService)
  {

  }
  @Output() choosed = new EventEmitter();
  ngOnInit(): void {
    this.cvService.getPersonne().subscribe(
      (personnes)=> this.personnes = personnes,
      (erreur)=>
      { this.personnes=this.cvService.getFakePersonne();
        alert('probleme de connexion les donnees  sont fake');
      }
    );
  }
  /*choose(choosed)
  {
     this.choosed.emit(choosed);
  }*/
}
