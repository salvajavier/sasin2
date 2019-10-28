import { Component, OnInit } from '@angular/core';
import { DrogasService } from 'src/app/_servicios/drogas.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-tabla-drogas',
  templateUrl: './tabla-drogas.component.html',
  styleUrls: ['./tabla-drogas.component.css']
})
export class TablaDrogasComponent implements OnInit {
  
  private gridApi;
  private gridColumnApi;
  private columnDefs = [];
  private rowData: any;
  private rowSelection;
  private selectedId;
  refrescarTabla: Subscription;
  constructor(private ds: DrogasService) { }

  ngOnInit() {

    moment.locale('es');
    this.columnDefs = [

      {
        headerName: 'Identificacion',
        children: [
            {headerName: 'Nombre', field: 'identificacion.nombre', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'Codigo', field: 'identificacion.codigo', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'Marca', field: 'identificacion.marca', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'N.Producto', field: 'identificacion.nProducto', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'Lote', field: 'identificacion.lote', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'CAS', field: 'identificacion.CAS', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
            {headerName: 'Cod. SENASA', field: 'identificacion.codigoSenasa', resizable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
        ]
    },
    {
      headerName: 'Informacion',
      children: [
          {headerName: 'Pureza', field: 'informacion.pureza', resizable: true,
            filter: 'agNumberColumnFilter',
            filterParams: {
            applyButton: true,
            clearButton: true
          }},
          {headerName: 'Humedad', field: 'informacion.humedad', resizable: true,
          filter: 'agNumberColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'F.Recepcion', field: 'informacion.fecha.recepcion', resizable: true,
          filter: 'agDateColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }, valueFormatter(params) { return params.value && params.value != null ? moment(params.value).format('L') : null; }  },
          {headerName: 'F.Vencimiento', field: 'informacion.fecha.vencimientoCertificado', resizable: true,
          filter: 'agDateColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }, valueFormatter(params) { return params.value && params.value != null ? moment(params.value).format('L') : null; }},
          {headerName: 'Cant.Recibida', field: 'informacion.cantidad.recibida.masa', resizable: true,
          filter: 'agNumberColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'CR Unidad', field: 'informacion.cantidad.recibida.unidad', resizable: true,
          filter: 'agTextColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'Libre / Combinada', field: 'informacion.DLDC.libre', resizable: true,
          filter: 'agTextColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'Masa DL', field: 'informacion.DLDC.masaDL', resizable: true,
          filter: 'agNumberColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'Masa DC', field: 'informacion.DLDC.masaDC', resizable: true,
          filter: 'agNumberColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
          {headerName: 'Factor DLDC', field: 'informacion.DLDC.fDLDC', resizable: true,
          filter: 'agNumberColumnFilter',
          filterParams: {
          applyButton: true,
          clearButton: true
        }},
      ]
  },


  {
    headerName: 'Datos Generales',
    children: [
        {headerName: 'Sectores', field: 'informacion.sectores', resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
        applyButton: true,
        clearButton: true
      }},
        {headerName: 'Rubros', field: 'informacion.rubros', resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
        applyButton: true,
        clearButton: true
      }},
        {headerName: 'Ubicacion', field: 'informacion.ubicacion', resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
        applyButton: true,
        clearButton: true
      }},
        {headerName: 'Estado', field: 'informacion.estado', resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
        applyButton: true,
        clearButton: true
      }},
        {headerName: 'Observaciones', field: 'informacion.observaciones', resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
        applyButton: true,
        clearButton: true
      }},
    ]
  },

  ];
    this.rowSelection = 'single';
    this.rowData = this.ds.getDrogas();
    this.ds.getDrogasSI();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll();
  }



  autoSizeAll() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }


  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.ds.idSeleccionado = selectedRows[0]._id;
  }


}
