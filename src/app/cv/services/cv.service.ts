import { getLocaleCurrencySymbol } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from 'src/app/model/personne';

const API_LINK="https://immense-citadel-91115.herokuapp.com/api/personnes/";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes :Personne[];
  clickSubject = new Subject <number> ();
  nbclick=0;
  selectitemsubject = new Subject <Personne>();
  constructor(private http : HttpClient)
  {
    this.personnes = [
      new Personne ( 1, 'khefacha', 'mohsen', 22, 1111, 'etudiant', '2.jpg'),
      new Personne ( 2, 'cha9chou9', 'aziz', 35, 125, 'joueur', '3.jpg'),
      new Personne ( 3, 'cha9chou9', 'aziz', 35, 125, 'joueur', '      ')

                     ];
  }
  getFakePersonne()
  {
    return this.personnes;
  }

  getPersonne() : Observable <Personne[]>
  {
    return this.http.get<Personne[]>(API_LINK);
  }

  getFakePersonnebyid(id):Personne
  {
    return this.personnes.find((Personne) => Personne.id === +id
    );

  }

  getPersonnebyid(id):Observable<Personne>
  {
     const headers=new HttpHeaders().set('Authorization','aymen');
     const params = new HttpParams().set('codeacess','123456789').set('age','22');
     return this.http.get<Personne>(API_LINK+id,{headers,params});
  }

  deletepersonne(personne : Personne)
  {
    const index = this.personnes.indexOf(personne);
    if(index==-1)
    {
      alert('personne inexistant');
      return null;
    }
    else
    {
      this.personnes.splice(index,1);
      return 1 ;
    }

  }

  addfakepersonne(personne : Personne)
  {
    const id = this.personnes[this.personnes.length -1].id;
    personne.id= id + 1 ;
    this.personnes.push(personne);
  }

  addpersonne(personne:Personne)
  {
    const token = localStorage.getItem('token');
    if(token)
    {
      const headers=new HttpHeaders().set('Authorization',token)
      return this.http.post(API_LINK,personne,{headers});
    }
    return this.http.post(API_LINK,personne);
  }

  click()
  {
     this.nbclick ++;
     this.clickSubject.next(this.nbclick);
  }

  clickoneitem(personne : Personne)
  {
   this.selectitemsubject.next(personne);
  }

}
