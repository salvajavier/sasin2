export interface IntCliente {
    id: string;
    grupo?: string;
    nombre: string;
    cuit: string;
    direccion: {calle: string, altura: string, localidad: string, codigoPostal: string};
    contactos?: {nombre: string; telefono: string; mail: string};
}

export class Cliente  {
  id: string;
  grupo?: string;
  nombre: string;
  cuit: string;
  direccion: {direccion: string, localidad: string, codigoPostal: string};
  contactos?: {nombre: string; telefono: string; mail: string};

  constructor(cliente) {
    this.id = null;
    this.grupo ? this.grupo = cliente.grupo.value : this.grupo = null;
    this.nombre = cliente.nombre.value;
    this.cuit = cliente.cuit.value;
    this.direccion = {direccion: null, localidad: null, codigoPostal: null};
    this.direccion.direccion  = cliente.direccion.value.direccion;
    this.direccion.localidad = cliente.direccion.value.localidad;
    this.direccion.codigoPostal = cliente.direccion.value.codigoPostal;
  }
}
