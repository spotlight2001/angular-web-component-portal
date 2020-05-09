import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-root',
  template: `hi from client-b
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-b';
}
