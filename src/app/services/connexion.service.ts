import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  user:Utilisateur;
  connecte:boolean;

  constructor() {
    this.connecte = this.getConnecte();
    this.user = {
      identifiant:'',
      mdp:''
    }
  }

  envoieConne(){
    console.log("Ma conne = ", this.user);
    this.connecte = true;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }

  getConnecte():boolean{
    return eval(sessionStorage.getItem('connecte'));
  }

  toutLeMondePeutChanger(){
    console.log("Mon ID = ", this.user.identifiant);
  }

}
