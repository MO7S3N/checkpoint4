import { Component, OnInit } from '@angular/core';
import {Personne} from 'src/app/model/personne';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes : Personne[];
  choosed : Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
     new Personne ( 1, 'khefacha', 'mohsen', 22, 1111, 'etudiant', '2.jpg'),
     new Personne ( 2, 'cha9chou9', 'aziz', 35, 125, 'joueur', '3.jpg')

    ];
  }
choose(personne)
{
this.choosed=personne;
}
}
