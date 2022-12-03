import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoDetallesComponent } from './foto-detalles/foto-detalles.component';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FotoDetallesComponent,
    ListaFotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FotoDetallesComponent,
    ListaFotosComponent
  ]
})
export class FotosModule { }
