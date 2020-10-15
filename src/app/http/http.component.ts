import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const API_LINK='https://jsonplaceholder.typicode.com/users';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(API_LINK).subscribe(
      (datas)=>console.log(datas),
      (erreur)=>console.log(erreur)
    );

  }
  postTestapi()
  {
    const newPost={
        title:'foo',
        body : 'bar bar',
        userid :'1'
    };
    this.http.post(API_LINK,newPost).subscribe(
          (response)=>console.log(response)
    );
  }

}
