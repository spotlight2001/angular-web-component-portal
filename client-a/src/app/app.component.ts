import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-root',
  template: `hi from client-a
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-a';
}