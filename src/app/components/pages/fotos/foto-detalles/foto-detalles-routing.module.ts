import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoDetallesComponent } from './foto-detalles.component';

const routes: Routes = [{ path: '', component: FotoDetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotoDetallesRoutingModule { }
