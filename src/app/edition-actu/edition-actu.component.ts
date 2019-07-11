import { Component, OnInit } from '@angular/core';
import { ActuService } from '../services/actu.service';
import { ActivatedRoute } from '@angular/router';
import { Actu } from '../modele/actu';

@Component({
  selector: 'app-edition-actu',
  templateUrl: './edition-actu.component.html',
  styleUrls: ['./edition-actu.component.css']
})
export class EditionActuComponent implements OnInit {
  
  actu:Actu ;

  constructor(private routeParams:ActivatedRoute, public actuServ:ActuService) { 

    this.actu = {
      titre:"",
      alias:"",
      description:"",
      img:""
    }
  }

  newsId: string | number;

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['id']; // (+) convertit 'id' en nombre
      console.log(this, this.newsId);
      this.actu = this.actuServ.listeActu[this.newsId]; // Récupération de la news dans la liste des news sur le service ActuService
    });
  }

}
