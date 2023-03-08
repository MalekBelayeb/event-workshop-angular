import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'auth', component:AuthentificationComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent},
  {path: '**',component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
