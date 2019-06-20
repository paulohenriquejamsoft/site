import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { ErroComponent } from './components/erro/erro.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: ErroComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
