import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DrogasComponent } from './drogas/drogas/drogas.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path: '',
   component: AdminComponent,
   data: {breadcrumb: 'Dashboard'},
   children: [{
     path: 'clientes',
     component: ClientesComponent,
     data: {breadcrumb: 'Clientes'}
    },
    {
      path: 'drogas',
      component: DrogasComponent,
      data: {breadcrumb: 'Drogas'}
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
