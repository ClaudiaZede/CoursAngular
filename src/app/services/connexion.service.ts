import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connecte:boolean=false;

  constructor() {
    this.connecte = this.getConnecte();
  }

  getConnecte():boolean{
      return this.connecte=true;
  }

}
