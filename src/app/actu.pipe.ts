import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actu'
})
export class ActuPipe implements PipeTransform {

  transform(values: any, filtre?: any): any {
    if (!values || !values.length) return [];
    if (!filtre) return values;

    // Filtrer le tableau fourni en gérant la casse
    return values.filter(v => {
      // Filtre sur le titre
      if(v.titre){
        return v.titre.toLowerCase().indexOf(filtre.toLowerCase()) >=0 ;
      }
      // Filtre sur la description
      if(v.description){
        return v.description.toLowerCase().indexOf(filtre.toLowerCase()) >=0 ;
      }
      // Filtre sur l'intro d'une news
      if(v.intro){
        return v.intro.toLowerCase().indexOf(filtre.toLowerCase()) >=0 ;
      }
    });
  }

}
