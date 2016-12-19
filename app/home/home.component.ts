import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	template: `
  <h1>HOME</h1>
		<a  routerLink="/dashboard">Go to DashBoard</a>
  `
})

export class HomeComponent { }
