import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActuService } from '../services/actu.service';
import { Actu } from '../modele/actu';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {

  actu:Actu = {
    titre:"",
    alias:"",
    description:"",
    img:""
  }

  newsId: string | number;

  constructor(private routeParams:ActivatedRoute, public actuServ:ActuService) { }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['id']; // (+) convertit 'id' en nombre
      console.log(this, this.newsId);
      this.actu = this.actuServ.listeActu[this.newsId]; // Récupération de la news dans la liste des news sur le service ActuService
    });
  }
}
