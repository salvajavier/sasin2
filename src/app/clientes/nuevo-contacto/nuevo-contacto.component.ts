import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Contacto } from 'src/app/_modelos/contactos';
import { ClientesService } from 'src/app/_servicios/clientes.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  constructor(private fb:FormBuilder, private cs: ClientesService) { }

  nuevoContactoForm: FormGroup;

  save(formData) {
    const contacto = new Contacto(formData);
    this.cs.postClientes(contacto);
  }

  ngOnInit() {
    this.nuevoContactoForm = this.fb.group({
      grupo: [''],
      nombreContacto: [''],
      telefonoContacto: [''],
      mailContacto: ['']
    }) 
  }

}
