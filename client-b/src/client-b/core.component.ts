import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <div id="client-b">
      <div>
        <a routerLink="page1">Page1 in client-b</a> |
        <a routerLink="page2">Page2 in client-b</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      #client-b {
        border: navy dashed 5px;
        padding: 10px;
      }
    `,
  ],
})
export class CoreComponent {}
