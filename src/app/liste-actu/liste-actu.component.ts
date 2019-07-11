import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-liste-actu',
  templateUrl: './liste-actu.component.html',
  styleUrls: ['./liste-actu.component.css']
})
export class ListeActuComponent implements OnInit {
  
  constructor(public adrien:ActuService) { }

  ngOnInit() {
  }

}
