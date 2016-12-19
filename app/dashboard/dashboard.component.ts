import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	template: `
  <h1>dashboard</h1>
	<section class="main-container" >	
	<router-outlet></router-outlet>
	</section>
  `
})

export class DashboardComponent { }
