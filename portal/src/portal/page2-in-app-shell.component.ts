import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2-in-app-shell',
  template: `<div id="module2InPortal">hi from page2 in app shell</div>`,
  styles: [`
     #module2InPortal {
        border: yellow dashed 5px;
        padding: 10px;
      }
  `]
})
export class Page2InAppShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
