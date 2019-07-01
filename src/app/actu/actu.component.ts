import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {
  actu:object = {
    titre:"Mon actualité",
    alias:"Le lien vers mon actualité",
    description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
    img:"assets/images/actu1.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
