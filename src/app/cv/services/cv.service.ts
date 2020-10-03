import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes :Personne[];
  constructor()
  {
    this.personnes = [
      new Personne ( 1, 'khefacha', 'mohsen', 22, 1111, 'etudiant', '2.jpg'),
      new Personne ( 2, 'cha9chou9', 'aziz', 35, 125, 'joueur', '3.jpg'),
      new Personne ( 3, 'cha9chou9', 'aziz', 35, 125, 'joueur', '      ')

                     ];
  }
  getPersonne()
  {
    return this.personnes;
  }

  getPersonnebyid(id):Personne
  {
    return this.personnes.find((Personne) => Personne.id === +id
    );

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

}
