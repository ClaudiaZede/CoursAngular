import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  user:Utilisateur;
  connecte:boolean;
  token:string="OnVerraSiCaMarcheDAccordALAConsigne";

  constructor() {
    this.connecte = this.getConnecte();
    this.user = {
      identifiant:'',
      mdp:''
    }
  }
  // Paramétrer la connexion d'un utilisateur
  envoieConne(){
    console.log("Ma connexion = ", this.user);
    this.connecte = true;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }
  // Récupérer l'état de connexion d'un utilisateur
  getConnecte():boolean{
    return eval(sessionStorage.getItem('connecte'));
  }
  // Déconnecter l'utilisateur en prenant en compte la session
  deconnecte(){
    this.connecte = false;
    sessionStorage.setItem('connecte', 'false');
  }
}

