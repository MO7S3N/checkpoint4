import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne : Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
