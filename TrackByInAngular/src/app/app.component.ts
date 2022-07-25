import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TrackByInAngular';
  store: any;
  isTrackByMode: boolean = true;
  isNotTrackByMode: boolean = true;

  constructor() {
    this.getData();
  }

  getData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
    ];
  }

  trackByFn(index:number, item:any) {
    return index;
  }

  getNewData() {
    this.store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Test' },
      { id: 4, name: 'Sam' },
      { id: 5, name: 'Kelly' },
      { id: 6, name: 'Thor' },
    ];
  }
}
