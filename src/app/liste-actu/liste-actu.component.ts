import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-actu',
  templateUrl: './liste-actu.component.html',
  styleUrls: ['./liste-actu.component.css']
})
export class ListeActuComponent implements OnInit {
  actualites:Array<object> = [
    {
      titre:"Mon actualité",
      alias:"Le lien vers mon actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    },
    {
      titre:"Ma deuxième actualité",
      alias:"Le lien vers ma deuxième actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    },
    {
      titre:"Ma deuxième actualité",
      alias:"Le lien vers ma deuxième actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    },
    {
      titre:"Ma deuxième actualité",
      alias:"Le lien vers ma deuxième actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    },
    {
      titre:"Ma deuxième actualité",
      alias:"Le lien vers ma deuxième actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    },
    {
      titre:"Ma deuxième actualité",
      alias:"Le lien vers ma deuxième actualité",
      description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
      img:"assets/images/actu1.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
