import { Location } from '@angular/common';
import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      App shell
    </div>

    <!-- NAVIGATION -->
    <nav>
      <ul>
        <li><a routerLink="page1">portal / page1</a></li>
        <li><a routerLink="page2">portal / page2</a></li>
        <li><a routerLink="client-a">client-a</a></li>
        <li><a routerLink="client-b">client-b</a></li>
      </ul>
    </nav>

    <!-- PORTAL ROUTER -->
    <router-outlet></router-outlet>

    <!-- WEB COMPONENTS -->
    <ng-template #loadingClientA>Loading Client A ...<br></ng-template>
    <ng-template #errorClientA>Error failed loading Client A<br></ng-template>
    <ax-lazy-element *axLazyElementDynamic="'client-a', url: config.clientAJsUrl; module: true; loadingTemplate: loadingClientA;
        errorTemplate: errorClientA"
        [data]="data"
      (message)="handleMessage($event)">
</ax-lazy-element>

    <ng-template #loadingClientB>Loading Client B ...<br></ng-template>
    <ng-template #errorClientB>Error failed loading Client B<br></ng-template>
    <ax-lazy-element *axLazyElementDynamic="'client-b', url: config.clientBJsUrl; module: true; loadingTemplate: loadingClientB;
        errorTemplate: errorClientB"
        [data]="data"
      (message)="handleMessage($event)">
</ax-lazy-element>
  `,
  styles: [],
})
export class AppComponent {
  title = "portal";

  data = null;

  config = {
    clientAJsUrl: 'http://localhost:7201/main.js',
    clientBJsUrl: 'http://localhost:7202/main.js'
  }

  constructor(
    private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.location.onUrlChange(url => {
      console.log('portal/AppComponent/onUrlChange url=' + url)
      this.data = { url: url }
    })
  }

  handleMessage(msg): void {
    console.debug("portal received message: ", JSON.stringify(msg));
  }
}
