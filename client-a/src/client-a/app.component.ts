import { Component, ViewEncapsulation, OnChanges, Input, InjectionToken, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  // selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-a';

  @Input('data')
  set data(data) {
    const url = data.url.replace('/portal', '') // remove base-href // FIXME inject base-href
    console.log('client-a/AppComponent/setData: navigate to=' + url)
    this.router.navigateByUrl(url, { skipLocationChange: false });
  }

  constructor(
    private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?    
  }
}