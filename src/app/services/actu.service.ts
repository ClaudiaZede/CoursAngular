import { Injectable } from '@angular/core';
import { Actu } from '../modele/actu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  listeActu:Array<Actu>;

  constructor(private http:HttpClient) {
    this.listeActu = [];
    this.getActus();
  }

  getActus(){
    this.http.get<Array<Actu>>('assets/data/actu.json').subscribe(
      (data)=>{
        console.log(this, data);
        this.listeActu=data;
      }
    );
  }

}
