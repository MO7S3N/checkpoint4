import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Personne} from 'src/app/model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes : Personne[];
  constructor() { }
  @Output() choosed = new EventEmitter();
  ngOnInit(): void {
  }
  choose(choosed)
  {
     this.choosed.emit(choosed);
  }
}
