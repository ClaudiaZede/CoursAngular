import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public conServ:ConnexionService ) { }

  ngOnInit() {
  }

}
