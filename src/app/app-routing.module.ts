import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
    { path: 'lista-fotos', loadChildren: () => import('./components/pages/fotos/lista-fotos/lista-fotos.module').then(m => m.ListaFotosModule) }, 
    { path: 'foto-detalles', loadChildren: () => import('./components/pages/fotos/foto-detalles/foto-detalles.module').then(m => m.FotoDetallesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
