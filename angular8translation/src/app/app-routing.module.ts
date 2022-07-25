import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamiqueTranslateComponent} from './dynamique-translate/dynamique-translate.component';


const routes: Routes = [
  {path: 'texte', component: DynamiqueTranslateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
