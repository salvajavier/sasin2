import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AdminComponent } from './admin/admin.component';
import { ClientesComponent } from './clientes/clientes.component';

import { AgGridModule } from 'ag-grid-angular';
import { NuevoClienteComponent } from './clientes/nuevo-cliente/nuevo-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoContactoComponent } from './clientes/nuevo-contacto/nuevo-contacto.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientesComponent,
    NuevoClienteComponent,
    NuevoContactoComponent,
    TablaClientesComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents: [NuevoClienteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
