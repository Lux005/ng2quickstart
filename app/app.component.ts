import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
