import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Cliente, IntCliente } from '../_modelos/cliente';
import { ClientesComponent } from '../clientes/clientes.component';
import { ClientesService } from '../_servicios/clientes.service';
import { OnInit, ChangeDetectorRef } from '@angular/core';

// TODO: Replace this with your own data model type
export interface TablaClientesItem {
  id: string;
  grupo?: string;
  nombre: string;
  cuit: string;
  direccion: {direccion: string, localidad: string, codigoPostal: string};
  contactos?: {nombre: string; telefono: string; mail: string};
}


// TODO: replace this with real data from your application

/**
 * Data source for the TablaClientes view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaClientesDataSource extends DataSource<IntCliente>  {
  data: IntCliente[];

  paginator: MatPaginator;
  sort: MatSort;

  constructor(private cs: ClientesService) {
    super();
    this.cs.getClientesUpdatedListener().subscribe(res => this.data = res);
  }



  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IntCliente[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IntCliente[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IntCliente[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'grupo': return compare(a.grupo, b.grupo, isAsc);
        // case 'direccion': return compare(a.direccion.direccion, b.direccion.direccion, isAsc);
        case 'cuit': return compare(a.cuit, b.cuit, isAsc);
        case 'localidad': return compare(a.direccion.localidad, b.direccion.localidad, isAsc);
        case 'codigoPostal': return compare(a.direccion.codigoPostal, b.direccion.codigoPostal, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
