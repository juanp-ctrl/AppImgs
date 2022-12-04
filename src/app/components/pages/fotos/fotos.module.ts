import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoDetallesComponent } from './foto-detalles/foto-detalles.component';
import { ListaFotosComponent } from './lista-fotos/lista-fotos.component';
import { RouterModule } from '@angular/router';
import { FotoComponent } from './fotos.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    FotoDetallesComponent,
    ListaFotosComponent,
    FotoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    FotoDetallesComponent,
    ListaFotosComponent,
    FotoComponent
  ]
})
export class FotosModule { }
