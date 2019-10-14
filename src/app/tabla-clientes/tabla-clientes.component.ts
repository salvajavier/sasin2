import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaClientesDataSource, TablaClientesItem } from './tabla-clientes-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { ClientesService } from '../_servicios/clientes.service';
import { IntCliente } from '../_modelos/cliente';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<IntCliente>;
  dataSource: TablaClientesDataSource;


 constructor(private cs: ClientesService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'grupo', 'nombre', 'cuit', 'direccion', 'localidad', 'codigoPostal', 'contactos', 'editar', 'eliminar'];
  selection = new SelectionModel<IntCliente>(true, []);

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}


  ngOnInit() {
    this.dataSource = new TablaClientesDataSource(this.cs);
    this.cs.getClientes();
    this.cs.getClientesUpdatedListener().subscribe();
  }
ngOnDestroy() {

}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
