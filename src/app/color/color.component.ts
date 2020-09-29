import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color="green";
  constructor(private activatedroute:ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params =>
      {
          this.color=params.color;
      } )
  }

}
