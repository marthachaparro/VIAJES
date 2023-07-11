import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { NavComponent } from './estructura/nav/nav.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
//import { HeaderComponent } from './estructura/header/header.component';
//import { NavComponent } from './estructura/nav/nav.component';
//import { FooterComponent } from './estructura/footer/footer.component';
//import { PrincipalComponent } from './modulos/principal.component';
//import { DashboardComponent } from './modulos/dashboard/dashboard.component';
//import { LoginComponent } from './modulos/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    UsuarioComponent,
    //HeaderComponent,
   // NavComponent,
   // FooterComponent,
    //PrincipalComponent,
  //  DashboardComponent,
   // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
