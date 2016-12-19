import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent, NotFoundRoutes } from './notfound/index';
import { HomeComponent, HomeRoutes} from './home/index';
import { LoginComponent, LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...LoginRoutes,
  ...DashboardRoutes,
  {
    path: "**",
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
