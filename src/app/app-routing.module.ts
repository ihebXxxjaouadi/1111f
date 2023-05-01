import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddReclamationComponent } from './views/client/add-reclamation/add-reclamation.component';
import { LoginFormComponent } from './views/admin/login/login-form/login-form.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard/dashboard.component';
import { LoginUserComponent } from './views/client/login/login-user/login-user.component';


const routes: Routes = [
  { path: 'userRec', component: AddReclamationComponent },
  { path: 'admin', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginUserComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
