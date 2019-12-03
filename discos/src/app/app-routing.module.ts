import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'crear-disco',
    loadChildren: () => import('./crear-disco/crear-disco.module').then( m => m.CrearDiscoPageModule)
  },
  {
    path: 'editar-disco/:id',
    loadChildren: () => import('./editar-disco/editar-disco.module').then( m => m.EditarDiscoPageModule)
  },
  {
    path: 'listar-discos',
    loadChildren: () => import('./listar-discos/listar-discos.module').then( m => m.ListarDiscosPageModule)
  },
  {
    path: 'eliminar-discos',
    loadChildren: () => import('./eliminar-discos/eliminar-discos.module').then( m => m.EliminarDiscosPageModule)
  },
  {
    path: 'detalles-disco',
    loadChildren: () => import('./detalles-disco/detalles-disco.module').then( m => m.DetallesDiscoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
