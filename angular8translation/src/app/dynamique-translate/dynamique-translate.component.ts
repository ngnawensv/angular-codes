import { Component, OnInit } from '@angular/core';
import {TranslateItemService} from '../service/translate-item.service';

@Component({
  selector: 'app-dynamique-translate',
  templateUrl: './dynamique-translate.component.html',
  styleUrls: ['./dynamique-translate.component.scss']
})
export class DynamiqueTranslateComponent implements OnInit {

  message = '';
  constructor( private  translate: TranslateItemService) { }

  ngOnInit() {
  }

}
