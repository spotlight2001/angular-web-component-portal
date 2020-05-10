import { Component, ViewEncapsulation, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location, APP_BASE_HREF } from '@angular/common';

@Component({
  // selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'client-b';

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

    this.location.onUrlChange(url => {
      console.log('client-b/AppComponent/onUrlChange url=' + url)
      this.router.initialNavigation() // with router and html5 urls, inner router doesnt detect url changes
    })
  }
}
