import {Component, Input} from '@angular/core';

@Component( {
  selector: 'app-root',
  template: `    
    <fieldset *ngFor="let product of products">
      <legend>{{ product.name }}</legend>
      {{ expanded ? product.description : product.description.substr(0, summarySize) }}
      <app-description [description]="product.description"></app-description>
    </fieldset>
      <!--<button type="button" (click)="expanded = !expanded">
      <span *ngIf="expanded">
        &uparrow;
      </span>
        <span *ngIf="!expanded">
        &rightarrow;
      </span>
      </button>
    </fieldset>
    
    <table>
      <tr *ngFor="let product of products">
        <td>{{product.name}}</td>
        <td><app-description [description]="product.description"></app-description></td>
        <td><button type="button" (click)="expanded = !expanded">
      <span *ngIf="expanded">
        &uparrow;
      </span>
          <span *ngIf="!expanded">
        &rightarrow;
      </span>
        </button></td>
      </tr>
    </table>-->

    <table>
      <tr *ngFor="let product of products">
        <td>{{product.name}}</td>
        <td><app-description [description]="product.description"></app-description></td>
    </table>
  `,
} )
export class AppComponent {
  summarySize = 50;
  expanded = false;
  readonly products: { name: string, description: string }[] = [
    {
      name: 'Potato',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet necessitatibus? Ad deleniti dolorum, itaque maxime numquam porro reiciendis vel vero. Eum, facilis, maxime! Dolore dolores excepturi quos similique ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet architecto culpa cum eius et ex expedita illo in nam nobis, numquam obcaecati odio placeat, sapiente temporibus voluptates. Inventore!',
    },
    {
      name: 'Onion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem beatae commodi cupiditate harum nobis odio quaerat reiciendis, suscipit ullam? At, autem beatae earum magnam numquam provident quia sequi similique? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum nobis saepe totam voluptatem. Aliquam commodi dignissimos, earum eveniet harum illum iste laborum laudantium modi nam neque provident quo repudiandae!',
    },
    {
      name: 'Tomato',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aut beatae blanditiis dignissimos dolorum et fuga hic ipsam ipsum non nulla praesentium quidem recusandae repellat rerum saepe, vel. Optio, soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum placeat porro quasi totam? Ad dicta dolor est, id iste labore laudantium mollitia ratione reiciendis voluptatum! Eum provident rem sit temporibus?',
    },
    {
      name: 'Rice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid animi asperiores corporis debitis, distinctio dolorum eveniet fuga ipsa laboriosam magnam molestias officiis, quas recusandae saepe soluta temporibus, vitae voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque distinctio doloremque enim est et excepturi, facere in ipsam nam nemo odio officia officiis placeat quibusdam saepe sequi totam veniam!',
    },
  ];


}
