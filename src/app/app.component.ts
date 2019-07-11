import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intro:object = {
    titre:"Découverte d'Angular",
    soustitre:"Développer une application simple"
  }
}
