import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-a';

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?    
  }
}