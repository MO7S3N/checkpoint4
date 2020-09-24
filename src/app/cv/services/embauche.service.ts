import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauchees : Personne[]=[];;
  constructor() { }
  getEmbauches()
  {
    return this.embauchees;
  }
  embaucher(personne : Personne)
  {
     const index = this.embauchees.indexOf(personne);
     if(index == -1)
      {
          this.embauchees.push(personne);
      }
      else
      {
        alert('{{personne.name} est deja embauche');
      }
  }

}
