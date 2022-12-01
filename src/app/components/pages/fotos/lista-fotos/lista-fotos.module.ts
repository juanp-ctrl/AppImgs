import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFotosRoutingModule } from './lista-fotos-routing.module';
import { ListaFotosComponent } from './lista-fotos.component';


@NgModule({
  declarations: [
    ListaFotosComponent
  ],
  imports: [
    CommonModule,
    ListaFotosRoutingModule
  ]
})
export class ListaFotosModule { }
