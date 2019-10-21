import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private cs: ClientesService) { }

  ngOnInit() {
    this.nuevaDrogaForm = this.fb.group({
     identificacion: this.fb.group({
       nombre: [''],
       codigo: [''],
       marca: [''],
       nProducto: [''],
       lote: [''],
       CAS: [''],
       codigoSenasa: [''],
     }),

     informacion: this.fb.group({
      pureza: [''],
      humedad: [''],
      fecha: this.fb.group({
        recepcion: [''],
        vencimientoCertificado: ['']
      }),
      cantidad: this.fb.group ({
        recibida: this.fb.group ({
          masa: [''],
          unidad: ['']
        }),
        remanente: this.fb.group ({
          masa: [''],
          unidad: ['']
        })
      }),
      DLDC: this.fb.group ({
        libre: [''],
        masaDL: [''],
        masaDC: [''],
        fDLDC: ['']
      }),
     }),
      sectores: [''],
      rubros: [''],
      ubicacion: [''],
      estado: [''],
      observaciones: [''],
      certificados: [''],
      retesteos: this.fb.group ({
        admiteRetesteos: [''],
          retesteo: this.fb.group ({
            admite: [''],
            numero: [''],
            fecha: this.fb.group ({
              realizacion: [''],
              vencimiento: ['']
            })
          })
      }),
    });
  }

  save(formData) {
    const cliente = new Cliente (formData);
    this.cs.postClientes(cliente);
  }

}
