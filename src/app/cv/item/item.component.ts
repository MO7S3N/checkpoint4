import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne :Personne;
  constructor() { }
  @Output() choosed =new EventEmitter();
  ngOnInit(): void {
  }
choose()
{
 this.choosed.emit(this.personne);
}
}
