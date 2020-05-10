import { Component } from "@angular/core";

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
        <li><a href="#page1">portal / page1</a></li>
        <li><a href="#page2">portal / page2</a></li>
        <li><a href="#client-a">client-a</a></li>
        <li><a href="#client-b">client-b</a></li>
      </ul>
    </nav>

    <!-- PORTAL ROUTER -->
    <router-outlet></router-outlet>

    <!-- WEB COMPONENTS -->
    <ng-template #loadingClientA>Loading Client A ...<br></ng-template>
    <ng-template #errorClientA>Error failed loading Client A<br></ng-template>
    <client-a
      *axLazyElement="
        'http://localhost:7201/main.js?dont-cache';
        loadingTemplate: loadingClientA;
        errorTemplate: errorClientA
      "
      [data]="data"
      (message)="handleMessage($event)"
    ></client-a>

    <ng-template #loadingClientB>Loading Client B ...<br></ng-template>
    <ng-template #errorClientB>Error failed loading Client B<br></ng-template>
    <client-b
      *axLazyElement="
        'http://localhost:7202/main.js?dont-cache';
        loadingTemplate: loadingClientB;
        errorTemplate: errorClientB
      "
      [data]="data"
      (message)="handleMessage($event)"
    ></client-b>
  `,
  styles: [],
})
export class AppComponent {
  title = "portal";

  data = { key: "value" };

  handleMessage(msg): void {
    console.debug("shell received message: ", JSON.stringify(msg));
  }
}
