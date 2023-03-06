import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmdPageComponent } from './pages/amd-page/amd-page.component';
import { AyudaPageComponent } from './pages/ayuda-page/ayuda-page.component';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';
import { EnsamblePageComponent } from './pages/ensamble-page/ensamble-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IntelPageComponent } from './pages/intel-page/intel-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { OlvidarPageComponent } from './pages/olvidar-page/olvidar-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'inicio', component: HomePageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'ensamble', component:EnsamblePageComponent},
  {path: 'nosotros', component:NosotrosPageComponent},
  {path: 'configuracion', component:AyudaPageComponent},
  {path: 'olvidar', component:OlvidarPageComponent},
  {path: 'intel', component:IntelPageComponent},
  {path: 'amd', component:AmdPageComponent},
  {path: 'carta', component:CartaPageComponent},
  {path: 'carrito', component:CarritoPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
