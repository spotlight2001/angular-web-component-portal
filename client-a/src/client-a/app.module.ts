import { Page2InClientBComponent } from './../../../client-b/src/client-b/page2-in-client-b.component';
import { Page1InClientAComponent } from './page1-in-client-a.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { Page2InClientAComponent } from './page2-in-client-a.component';
import { EmptyComponent } from './empty.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    AppComponent, EmptyComponent, CoreComponent, Page1InClientAComponent, Page2InClientBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'client-a', component: CoreComponent, children: [
          { path: 'page1', component: Page1InClientAComponent },
          { path: 'page2', component: Page2InClientAComponent },
        ]
      },
      { path: '**', component: EmptyComponent }
    ], { useHash: true, enableTracing: true })
  ],
  providers: [],
  schemas: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('client-a', appElement);
    console.log('we have defined custom element client-a')
  }
}
