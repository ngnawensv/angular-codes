import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DynamicTableComponent } from './dynamic-table.component';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
} )
export class AppComponent implements OnDestroy {
  subscription: Subscription[] = [];

  constructor( private dialog: MatDialog ) {
  }

  ngOnDestroy() {
    for ( const subscription of this.subscription ) {
      subscription.unsubscribe();
    }
  }

  open() {
    const subscription = this.dialog
      .open( DynamicTableComponent, {
        height: '400px',
        width: '600px'})
      .afterClosed()
      .subscribe( result => console.log( result ) );

    this.subscription.push( subscription );
  }
}
