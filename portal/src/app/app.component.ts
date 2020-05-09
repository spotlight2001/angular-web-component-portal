import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      App shell 
    </div>

    <!-- Web Components go here -->
    <ng-template #loadingClientA>Loading Client A ...</ng-template>
    <ng-template #errorClientA>Error failed loading Client A</ng-template>
    <client-a *axLazyElement="'http://localhost:7201/main.js?dont-cache'; loadingTemplate:loadingClientA; errorTemplate:errorClientA"
      [data]="data" (message)="handleMessage($event)"></client-a>

    <ng-template #loadingClientB>Loading Client B ...</ng-template>
    <ng-template #errorClientB>Error failed loading Client B</ng-template>
    <client-b *axLazyElement="'http://localhost:7202/main.js?dont-cache'; loadingTemplate:loadingClientB; errorTemplate:errorClientB"
      [data]="data" (message)="handleMessage($event)"></client-b>
  `,
  styles: []
})
export class AppComponent {
  title = 'portal';

  data = {key: 'value'}

  handleMessage(msg): void {
    console.debug('shell received message: ', JSON.stringify(msg));
  }
}
