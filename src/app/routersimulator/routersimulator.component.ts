import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routersimulator',
  templateUrl: './routersimulator.component.html',
  styleUrls: ['./routersimulator.component.css']
})
export class RoutersimulatorComponent implements OnInit {
  route : string;
  constructor(private router : Router)
  {

  }

  ngOnInit(): void {
  }
  gotoroute()
  {
    const link = [this.route];
    this.router.navigate(link);

  }

}
