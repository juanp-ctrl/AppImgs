import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotoDetallesRoutingModule } from './foto-detalles-routing.module';
import { FotoDetallesComponent } from './foto-detalles.component';


@NgModule({
  declarations: [
    FotoDetallesComponent
  ],
  imports: [
    CommonModule,
    FotoDetallesRoutingModule
  ]
})
export class FotoDetallesModule { }
