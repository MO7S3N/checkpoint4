import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne :Personne;
  constructor(private CvService : CvService) { }
  //@Output() choosed =new EventEmitter();
  ngOnInit(): void {
  }
choose()
{
  this.CvService.clickoneitem(this.personne);
 //this.choosed.emit(this.personne);
}
}
