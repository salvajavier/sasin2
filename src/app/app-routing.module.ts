import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DrogasComponent } from './drogas/drogas/drogas.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { from } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  {path: '',
   component: AdminComponent,
   data: {breadcrumb: 'Dashboard'},
   canActivate: [],
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
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
