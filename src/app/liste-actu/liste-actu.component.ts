import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-liste-actu',
  templateUrl: './liste-actu.component.html',
  styleUrls: ['./liste-actu.component.css']
})
export class ListeActuComponent implements OnInit {

  debut:number=0;
  ecart:number=4;
  filtreActu:string;
  
  constructor(public actus:ActuService, public conServ:ConnexionService) { }

  ngOnInit() {
    this.filtreActu;
  }

  pagination(n:number=0){
      this.debut = this.ecart;
      this.ecart += n;
  }
}
