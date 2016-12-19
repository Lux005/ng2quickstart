import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	template: `
  <h1>HOME</h1>
	<a  routerLink="../login">Go to Login</a>
  `
})

export class HomeComponent { }
