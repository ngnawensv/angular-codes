/**
 *
 * @since Nov 02, 2021 @t 21:31:53
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
} )
export class DynamicTableComponent {
  private readonly selected: { id: number, name: string, rate: string }[] = [];
  readonly dataSource: { id: number, name: string, rate: string }[] = [
    { id: 1, name: 'Tantampion', rate: ''},
    { id: 2, name: 'Concombre', rate: ''},
    { id: 3, name: 'Tapioca', rate: '' },
  ];

  constructor( private dialogRef: MatDialogRef<DynamicTableComponent> ) {
  }


  toggle( entry: { id: number, name: string ,rate: string} ) {
    if ( this.selected.includes( entry ) ) {
      const index = this.selected.indexOf( entry );

      this.selected.splice( index, 1 );
    } else {
      this.selected.push( entry );
    }
  }

  close() {
    this.dialogRef.close( this.selected );
  }

}
