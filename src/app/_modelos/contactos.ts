export interface IntContacto {
    id: string; // id del cliente al que se le asigna el contacto
    nombreContacto: string;
    telefonoContacto: string;
    mailContacto: string;
}

export class Contacto  {
  id: string; // id del cliente al que se le asigna el contacto
  nombreContacto: string;
  telefonoContacto: string;
  mailContacto: string;

  constructor(contacto) {
    this.id  = contacto.id.value 
    this.nombreContacto = contacto.nombreContacto.value;
    this.telefonoContacto = contacto.telefonoContacto.value;
    this.mailContacto = contacto.mailContacto.value
  }
}