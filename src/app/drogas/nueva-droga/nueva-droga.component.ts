import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/_modelos/droga';
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
  const cliente = new Cliente (formData);
  this.cs.postClientes(cliente);
}

calculoFactor() {
  return this.nuevaDrogaForm.controls.masaDL.value / this.nuevaDrogaForm.controls.masaDC.value 
}

}
