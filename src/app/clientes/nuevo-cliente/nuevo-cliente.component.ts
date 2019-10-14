import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Cliente } from '../../_modelos/cliente';
import { ClientesService } from '../../_servicios/clientes.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  constructor(private fb: FormBuilder, private cs: ClientesService ) { }

  nuevoClienteForm: FormGroup;

  save(formData) {
    const cliente = new Cliente(formData);
    this.cs.postClientes(cliente);
  }

  ngOnInit() {
    this.nuevoClienteForm = this.fb.group({
      grupo: [''],
      nombre: [''],
      cuit: [''],
      direccion: this.fb.group ({ direccion: [''], localidad: [''], codigoPostal: ['']}),
    });
  }



}
