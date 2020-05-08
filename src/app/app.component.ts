import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<app-demo></app-demo>  
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';
}
