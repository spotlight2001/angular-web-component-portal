import { RouterModule } from '@angular/router';
import { Page2InAppShellComponent } from './page2-in-app-shell.component';
import { Page1InAppShellComponent } from './page1-in-app-shell.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'page1', component: Page1InAppShellComponent },
      { path: 'page2', component: Page2InAppShellComponent },
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
