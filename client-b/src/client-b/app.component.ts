import { Component, ViewEncapsulation, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-b';

  constructor(
    private router: Router, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?  
    
    window.urlChangeEvents.subscribe(urlWithBaseHref => {
      const url = urlWithBaseHref.replace('/portal', '') // remove base-href // FIXME inject base-href
      console.log('client-b/AppComponent: navigate to=' + url)
      this.ngZone.run(() => this.router.navigateByUrl(url, { skipLocationChange: true }))
    })
  }
}
