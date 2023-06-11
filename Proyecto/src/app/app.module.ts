import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EnsamblePageComponent } from './pages/ensamble-page/ensamble-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { AyudaPageComponent } from './pages/ayuda-page/ayuda-page.component';
import { OlvidarComponent } from './components/olvidar/olvidar.component';
import { OlvidarPageComponent } from './pages/olvidar-page/olvidar-page.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { BannerComponent } from './components/banner/banner.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FlujoComponent } from './components/flujo/flujo.component';
import { GenteComponent } from './components/gente/gente.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { ProcesadorComponent } from './components/procesador/procesador.component';
import { IntelComponent } from './components/intel/intel.component';
import { IntelPageComponent } from './pages/intel-page/intel-page.component';
import { AmdPageComponent } from './pages/amd-page/amd-page.component';
import { AmdComponent } from './components/amd/amd.component';
import { CartaComponent } from './components/carta/carta.component';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    EnsamblePageComponent,
    NosotrosPageComponent,
    AyudaPageComponent,
    OlvidarComponent,
    OlvidarPageComponent,
    FotterComponent,
    BannerComponent,
    GaleriaComponent,
    FlujoComponent,
    GenteComponent,
    TiposComponent,
    ProcesadorComponent,
    IntelComponent,
    IntelPageComponent,
    AmdPageComponent,
    AmdComponent,
    CartaComponent,
    CartaPageComponent,
    CarritoPageComponent,
    CarritoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
