import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1-in-app-shell',
  template: `<div id="module2InPortal">hi from page1 in app shell</div>`,
  styles: [`
    #module2InPortal {
        border: green dashed 5px;
        padding: 10px;
      }
  `]
})
export class Page1InAppShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
