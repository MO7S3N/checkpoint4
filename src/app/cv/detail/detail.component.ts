import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne : Personne;
  constructor( private EmbaucherService: EmbaucheService)
   { }

  ngOnInit(): void {
  }
  embaucher()
  {
    this.EmbaucherService.embaucher(this.personne);
  }

}
