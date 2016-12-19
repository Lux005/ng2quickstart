import { Route } from '@angular/router';
import { DashboardComponent } from './index';

import { HomeRoutes } from './home/index';


export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
		children: [
		{path:'', redirectTo:'home',pathMatch:'full'},
		...HomeRoutes
		]
  	}
];
