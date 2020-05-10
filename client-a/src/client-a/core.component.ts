import { Component } from "@angular/core";

@Component({
  template: `
    <div id="client-a">
      <div>
        subnav: <a routerLink="page1">Page1 in client-a</a> |
        <a routerLink="page2">Page2 in client-a</a>
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      #client-a {
        border: darkred dashed 5px;
        padding: 10px;
      }
    `,
  ],
})
export class CoreComponent {}
