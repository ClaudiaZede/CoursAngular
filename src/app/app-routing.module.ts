import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeActuComponent } from './liste-actu/liste-actu.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionActuComponent } from './edition-actu/edition-actu.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'actualites', component:ListeActuComponent},
  {path:'actualite', component:ActuComponent},
  {path:'actualite/:id', component:ActuComponent},
  {path:'edition-actualite', component:EditionActuComponent, canActivate:[AuthGuard]},
  {path:'edition-actualite/:id', component:EditionActuComponent},
  {path:'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
