import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  Droga } from 'src/app/_modelos/droga';
import { ClientesService } from 'src/app/_servicios/clientes.service';

@Component({
  selector: 'app-nueva-droga',
  templateUrl: './nueva-droga.component.html',
  styleUrls: ['./nueva-droga.component.css']
})
export class NuevaDrogaComponent implements OnInit {

  nuevaDrogaForm: FormGroup;

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
  constructor(private fb: FormBuilder, private cs: ClientesService) { }

  ngOnInit() {
    this.nuevaDrogaForm = this.fb.group({
       nombre: [''],
       codigo: [''],
       marca: [''],
       nProducto: [''],
       lote: [''],
       CAS: [''],
       codigoSenasa: [''],

      pureza: [''],
      humedad: [''],
        fRecepcion: [''],
        fVencimientoCertificado: [''],
        masaCantidadRecibida: [''],
        unidadCantidadRecibida: [''],
        masaCantidadRemanente: [''],
        unidadCantidadRemanente: [''],
        drogaLibre: [''],
        masaDL: [''],
        masaDC: [''],
        fDLDC: [{value: '', disabled: true}],
        sectores: [''],
        rubros: [''],
        ubicacion: [''],
        estado: [''],
        observaciones: [''],
        certificados: [''],
      });
    this.fDLDC = this.nuevaDrogaForm.get('fDLDC');
    this.onChanges();
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
  console.log(formData)
  const cliente = new Droga (formData);
  //this.cs.postClientes(cliente);
  console.log(cliente);
}

calculoFactor() {
  return this.nuevaDrogaForm.controls.masaDL.value / this.nuevaDrogaForm.controls.masaDC.value 
}

}
