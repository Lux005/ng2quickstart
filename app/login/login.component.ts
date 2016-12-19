import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	template: `
  <h1>Login</h1>
	<a  routerLink="/home">Go to Home</a>
  `
})

export class LoginComponent { }
