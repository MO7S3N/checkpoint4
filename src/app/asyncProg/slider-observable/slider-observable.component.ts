import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-slider-observable',
  templateUrl: './slider-observable.component.html',
  styleUrls: ['./slider-observable.component.css']
})
export class SliderObservableComponent implements OnInit {
  path ='1.jpg'
  paths = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  'tim_logo.png'
  ];

  sliderObserble = new Observable <string> (
    (observer : Subscriber <unknown> ) => {
    let i = 0;
    setInterval(
      () => {
        if(i == this.paths.length)
        {
        i=0;
        }
        else
        {
          observer.next(this.paths[i++]);
        }
      },1500
    );
  }
);



  constructor() { }

  ngOnInit(): void {
    this.sliderObserble.subscribe(
      (path) => this.path = path
    );
  }

}
