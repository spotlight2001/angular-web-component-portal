import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1-in-client-a',
  template: `hi from page2 in client-a<br>`,
  styles: [``]
})
export class Page2InClientAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
