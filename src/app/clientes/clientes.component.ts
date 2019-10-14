import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ClientesService } from '../_servicios/clientes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  a = new Subscription ();

  constructor(public dialog: MatDialog, private cs: ClientesService) { }

  ngOnInit() {
    this.cs.getClientes();
    this.cs.getClientesUpdatedListener().subscribe(res => console.log('esto tiene que funcionar no queda otra'))
  }



  // tslint:disable-next-line: member-ordering
  columnDefs = [
    {headerName: 'Nombre', field: 'make', sortable: true, filter: true },
    {headerName: 'Cuit', field: 'model', sortable: true, filter: true },
    {headerName: 'Planta', field: 'price', sortable: true, filter: true},
    {headerName: 'Direccion', field: 'model', sortable: true, filter: true },
];

// tslint:disable-next-line: member-ordering
rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];


openDialogNuevoCliente(): void {
  const dialogRef = this.dialog.open(NuevoClienteComponent, {
    width: '900px',
    height: '400px',
    disableClose: false
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
