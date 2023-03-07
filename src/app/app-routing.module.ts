import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'login', component:LoginComponent},
  //{path: 'register',component:RegisterComponent},
  //{path: 'reset-password',component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
