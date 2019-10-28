import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {  Droga } from 'src/app/_modelos/droga';
import { ClientesService } from 'src/app/_servicios/clientes.service';
import { DrogasService } from 'src/app/_servicios/drogas.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-droga',
  templateUrl: './nueva-droga.component.html',
  styleUrls: ['./nueva-droga.component.css']
})
export class NuevaDrogaComponent implements OnInit {



  nuevaDrogaForm: FormGroup;
  controlesFormulario;

  unidades = [
    {value: '0', viewValue: 'g'},
    {value: '1', viewValue: 'mg'},
    {value: '2', viewValue: 'ug'}
  ];

  sectores = [
    {value: '0', viewValue: 'HPLC'},
    {value: '1', viewValue: 'FQS'},
    {value: '2', viewValue: 'MASAS'},
    {value: '3', viewValue: 'GC'},
  ];

  rubros = [
    {value: '0', viewValue: 'Nitrofuranos'},
    {value: '1', viewValue: 'Ceftiofur'},
    {value: '2', viewValue: 'Aminoglucosidos'},
    {value: '3', viewValue: 'Fipronil'},
  ];

  ubicaciones = [
    {value: '0', viewValue: 'H-GRL-001'},
    {value: '1', viewValue: 'F-GRL-008'},
    {value: '2', viewValue: 'M-GRL-004'},
    {value: '3', viewValue: 'H-GRL-002'},
  ];

  certificados = [
    {value: '0', viewValue: 'Certificado 1', url: ''},
    {value: '1', viewValue: 'Certificado 2', url: ''},
    {value: '2', viewValue: 'Certificado 3', url: ''},
    {value: '3', viewValue: 'Certificado 4', url: ''},
  ];

  estados = [
    {value: '0', viewValue: 'Vigente - Remanente'},
    {value: '1', viewValue: 'Vigente - Agotado'},
    {value: '2', viewValue: 'Vencido - Remanente'},
    {value: '3', viewValue: 'Vencido - Agotado'},
  ];

fDLDC;
  constructor(private fb: FormBuilder, private ds: DrogasService, @Inject(MAT_DIALOG_DATA) public data: Droga) { }

  ngOnInit() {
    if (this.ds.formularioNuevaDroga === true) {
    this.nuevaDrogaForm = this.fb.group({
       nombre: ['', [Validators.required]],
       codigo: ['', [Validators.required, Validators.pattern('[a-zA-Z]+-[0-9]+')]],
       marca: [''],
       nProducto: [''],
       lote: [''],
       CAS: [''],
       codigoSenasa: [''],
       estandarInterno: [false, [Validators.required]],
       pureza: [null],
       humedad: [null],
       fRecepcion: [null],
        fVencimientoCertificado: [null],
        masaCantidadRecibida: [null],
        unidadCantidadRecibida: [''],
        masaCantidadRemanente: [null],
        unidadCantidadRemanente: [''],
        drogaLibre: [true, [Validators.required]],
        masaDL: [null],
        masaDC: [null],
        fDLDC: [{value: null, disabled: true}],
        sectores: [''],
        rubros: [''],
        ubicacion: [''],
        estado: ['', [Validators.required]],
        observaciones: [''],
        certificados: [''],
      }); } else {
        this.nuevaDrogaForm = this.fb.group({
          nombre: [this.data.identificacion.nombre, [Validators.required]],
          codigo: [this.data.identificacion.codigo, [Validators.required, Validators.pattern('[a-zA-Z]+-[0-9]+')]],
          marca: [this.data.identificacion.marca],
          nProducto: [this.data.identificacion.nProducto],
          lote: [this.data.identificacion.lote],
          CAS: [this.data.identificacion.CAS],
          codigoSenasa: [this.data.identificacion.codigoSenasa],
          estandarInterno: [this.data.identificacion.estandarInterno, [Validators.required]],
          pureza: [this.data.informacion.pureza],
          humedad: [this.data.informacion.humedad],
          fRecepcion: [this.data.informacion.fecha.recepcion],
           fVencimientoCertificado: [this.data.informacion.fecha.vencimientoCertificado],
           masaCantidadRecibida: [this.data.informacion.cantidad.recibida.masa],
           unidadCantidadRecibida: [this.data.informacion.cantidad.recibida.unidad],
           masaCantidadRemanente: [this.data.informacion.cantidad.remanente.masa],
           unidadCantidadRemanente: [this.data.informacion.cantidad.remanente.unidad],
           drogaLibre: [this.data.informacion.DLDC.libre, [Validators.required]],
           masaDL: [this.data.informacion.DLDC.masaDL],
           masaDC: [this.data.informacion.DLDC.masaDC],
           fDLDC: [{value: this.data.informacion.DLDC.fDLDC, disabled: true}],
           sectores: [this.data.informacion.sectores],
           rubros: [this.data.informacion.rubros],
           ubicacion: [this.data.informacion.ubicacion],
           estado: [this.data.informacion.estado, [Validators.required]],
           observaciones: [this.data.informacion.observaciones],
           certificados: [this.data.informacion.certificados],
         });

      }
    this.fDLDC = this.nuevaDrogaForm.get('fDLDC');
    this.onChanges();
    this.controlesFormulario = this.nuevaDrogaForm.controls;

}

onChanges(): void {
  this.nuevaDrogaForm.get('masaDL').valueChanges.subscribe(val => {
    if (this.nuevaDrogaForm.controls.masaDC.value !== '') {
      this.fDLDC.setValue((val / this.nuevaDrogaForm.controls.masaDC.value).toFixed(2));
    } else {
      this.fDLDC.setValue('Divisor = 0');
    }
  });

  this.nuevaDrogaForm.get('masaDC').valueChanges.subscribe(val => {
    if (this.nuevaDrogaForm.controls.masaDC.value !== '') {
      this.fDLDC.setValue((this.nuevaDrogaForm.controls.masaDL.value / val).toFixed(2));
    } else {
      this.fDLDC.setValue('Divisor = 0');
    }
  });
}

save(formData) {
  const droga = new Droga (formData);
  if (this.ds.formularioNuevaDroga === true) {
    this.ds.guardarDroga(droga);
  } else {
    this.ds.actualizarDroga(droga);
  }
}

calculoFactor() {
  return this.nuevaDrogaForm.controls.masaDL.value / this.nuevaDrogaForm.controls.masaDC.value;
}

getErrorMessage() {
  return this.controlesFormulario.nombre.hasError('required') || this.controlesFormulario.codigo.hasError('required') ?
  'Este es un campo requerido' : this.controlesFormulario.codigo.hasError('pattern') ? 'El codigo ingresado no es valido' : '';
}
}
