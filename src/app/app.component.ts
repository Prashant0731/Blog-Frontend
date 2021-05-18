import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dataoct Technologies';


//  Pagination 
// This is the app component (app.component.ts) from the example, it creates a hardcoded array of items to be paged in the ngOnInit() method, 
//and updates the current page of items in the onChangePage() callback method.

  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
      // an example array of 150 items to be paged
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

}
