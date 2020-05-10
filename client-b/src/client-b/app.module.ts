import { Page2InClientBComponent } from './page2-in-client-b.component';
import { Page1InClientBComponent } from './page1-in-client-b.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    AppComponent, EmptyComponent, CoreComponent, Page1InClientBComponent, Page2InClientBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-b', component: CoreComponent, children: [
        { path: 'page1', component: Page1InClientBComponent },
        { path: 'page2', component: Page2InClientBComponent },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [], 
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector})
    customElements.define('client-b', appElement);
    console.log('we have defined custom element client-b')
  }
 }
