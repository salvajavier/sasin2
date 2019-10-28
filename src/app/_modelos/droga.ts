export interface IntDroga {
    _id: string;
    identificacion: {
            nombre: string,
            codigo: string,
            marca: string,
            nProducto: string,
            lote: string,
            CAS: string,
            codigoSenasa: string,
            estandarInterno: boolean

    };
    informacion: {
            pureza: number,
            humedad: number,
            fecha: {
                    recepcion: Date,
                    vencimientoCertificado: Date,
            },
            cantidad: {
                    recibida: {masa: number, unidad: string},
                    remanente: {masa: number, unidad: string}
            },
            DLDC: {
                    libre: boolean,
                    masaDL: number,
                    masaDC: number,
                    fDLDC: number,
            };
            sectores: string [];
            rubros: string [];
            ubicacion: string;
            estado: string;
            observaciones: string;
            certificados: string []

    };
    retesteos: {
            admiteRetesteo: boolean,
            retesteo: {
                    admite: boolean,
                    numero: number,
                    fecha: {
                            realizacion: Date,
                            vencimiento: Date,
                    }
            }
    };
}

export class Droga  {
  _id: string;
  identificacion: {
    nombre: string,
    codigo: string,
    marca: string,
    nProducto: string,
    lote: string,
    CAS: string,
    codigoSenasa: string,
    estandarInterno: boolean
};
informacion: {
    pureza: number,
    humedad: number,
    fecha: {
            recepcion: Date,
            vencimientoCertificado: Date,
    },
    cantidad: {
            recibida: {masa: number, unidad: string},
            remanente: {masa: number, unidad: string}
    },
    DLDC: {
            libre: boolean,
            masaDL: number,
            masaDC: number,
            fDLDC: number,
    },
    sectores: string [],
    rubros: string [],
    ubicacion: string,
    estado: string,
    observaciones: string,
    certificados: string []
};

// Da error por undefined. Lo saque por el momento para no demorar. Despues lo arreglo
/*retesteos?: {
    admiteRetesteo?: boolean,
    retesteo: {
            admite: boolean,
            numero: number,
            fecha: {
                    realizacion: Date,
                    vencimiento: Date,
            }
    }
}*/

  constructor(droga: any) {
    this._id = null;
    this.identificacion = { nombre: null, codigo: null, marca: null, nProducto: null, lote: null, CAS: null, codigoSenasa: null,
         estandarInterno: null};
    this.informacion = { pureza: null, humedad: null, fecha: {recepcion: null, vencimientoCertificado: null},
                       cantidad: {recibida: {masa: null, unidad: null}, remanente: {masa: null, unidad: null}},
                       DLDC: { libre: null, masaDL: null, masaDC: null, fDLDC: null }, sectores: null, rubros: null,
                       ubicacion: null, estado: null, observaciones: null, certificados: null};
  //  this.retesteos = {admiteRetesteo: null, retesteo: {admite: null, numero: null, fecha: {realizacion: null, vencimiento: null}}}

    this.identificacion.nombre = droga.nombre.value;
    this.identificacion.codigo = droga.codigo.value;
    this.identificacion.marca = droga.marca.value;
    this.identificacion.nProducto = droga.nProducto.value;
    this.identificacion.lote = droga.lote.value;
    this.identificacion.CAS = droga.CAS.value;
    this.identificacion.codigoSenasa = droga.codigoSenasa.value;
    this.identificacion.estandarInterno = droga.estandarInterno.value;
    this.informacion.pureza = droga.pureza.value;
    this.informacion.humedad = droga.humedad.value;
    this.informacion.fecha.recepcion = droga.fRecepcion.value;
    this.informacion.fecha.vencimientoCertificado = droga.fVencimientoCertificado.value;
    this.informacion.cantidad.recibida.masa = droga.masaCantidadRecibida.value;
    this.informacion.cantidad.recibida.unidad = droga.unidadCantidadRecibida.value;
    this.informacion.cantidad.remanente.masa = droga.masaCantidadRemanente.value;
    this.informacion.cantidad.remanente.unidad = droga.unidadCantidadRemanente.value;
    this.informacion.DLDC.libre = droga.drogaLibre.value;
    this.informacion.DLDC.masaDL = droga.masaDL.value;
    this.informacion.DLDC.masaDC = droga.masaDC.value;
    this.informacion.DLDC.fDLDC = droga.fDLDC.value;
    this.informacion.sectores = droga.sectores.value;
    this.informacion.rubros = droga.rubros.value;
    this.informacion.ubicacion = droga.ubicacion.value;
    this.informacion.estado = droga.estado.value;
    this.informacion.observaciones = droga.observaciones.value;
    this.informacion.certificados = droga.certificados.value;
 /*   this.retesteos.admiteRetesteo = droga.retesteos.admiteRetesteo.value ? droga.retesteos.admiteRetesteo.value : null;
    this.retesteos.retesteo.admite = droga.retesteos.retesteo.admite.value;
    this.retesteos.retesteo.numero = droga.retesteos.retesteo.numero.value;
    this.retesteos.retesteo.fecha.realizacion = droga.retesteos.retesteo.fecha.realizacion.value;
    this.retesteos.retesteo.fecha.vencimiento = droga.retesteos.retesteo.fecha.vencimiento.value;*/
  }
}
