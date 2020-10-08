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
    this.personnes= this.cvService.getPersonne();
  }
  /*choose(choosed)
  {
     this.choosed.emit(choosed);
  }*/
}
