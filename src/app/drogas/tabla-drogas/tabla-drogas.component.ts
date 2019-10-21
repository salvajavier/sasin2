import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-drogas',
  templateUrl: './tabla-drogas.component.html',
  styleUrls: ['./tabla-drogas.component.css']
})
export class TablaDrogasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnDefs = [

    {
      headerName: "Identificacion",
      children: [
          {headerName: "Nombre", field: "identificacion.nombre"},
          {headerName: "Codigo", field: "identificacion.codigo"},
          {headerName: "Marca", field: "identificacion.marca"},
          {headerName: "N.Producto", field: "identificacion.nProducto"},
          {headerName: "Lote", field: "identificacion.lote"},
          {headerName: "CAS", field: "identificacion.CAS"},
          {headerName: "Cod. SENASA", field: "identificacion.codigoSenasa"},
      ]
  },

  {
    headerName: "Informacion",
    children: [
        {headerName: "Pureza", field: "informacion.pureza"},
        {headerName: "Humedad", field: "informacion.humedad"},
        {headerName: "F.Recepcion", field: "informacion.fecha.recepcion"},
        {headerName: "F.Vencimiento", field: "informacion.fecha.vencimientoCertificado"},
        {headerName: "Cant.Recibida", field: "informacion.cantidad.recibida"},
        {headerName: "Libre / Combinada", field: "informacion.DLDC.libre"},
        {headerName: "Masa DL", field: "informacion.DLDC.masaDL"},
        {headerName: "Masa DC", field: "informacion.DLDC.masaDC"},
        {headerName: "Factor DLDC", field: "informacion.DLDC.fDLDC"},
    ]
},


{
  headerName: "Datos Generales",
  children: [
      {headerName: "Sectores", field: "sectores"},
      {headerName: "Rubros", field: "rubros"},
      {headerName: "Ubicacion", field: "ubicacion"},
      {headerName: "Estado", field: "estado"},
      {headerName: "Observaciones", field: "observaciones"},
  ]
},

];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}
