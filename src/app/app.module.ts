import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeActuComponent } from './liste-actu/liste-actu.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ActuService } from './services/actu.service';
import { EditionActuComponent } from './edition-actu/edition-actu.component';
import { ConnexionService } from './services/connexion.service';
import { SecuriteIntercepteur } from './services/securite.intercepteur';
import { AuthIntercepteur } from './services/auth.intercepteur';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedComponent,
    AccueilComponent,
    ListeActuComponent,
    ActuComponent,
    ConnexionComponent,
    EditionActuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ActuService, , { provide: HTTP_INTERCEPTORS, useClass:AuthIntercepteur, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
