import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  embauchees:Personne[];
  constructor(private EmbaucheService:EmbaucheService)
  { }

  ngOnInit(): void {
    this.embauchees = this.EmbaucheService.getEmbauches();
  }

}
