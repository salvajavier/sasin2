export interface IntDroga {
    _id: string
    identificacion: {
            nombre: string,
            codigo: string,
            marca: string,
            nProducto: string,
            lote: string,
            CAS: string,
            codigoSenasa: string
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
            sectores: [string];
            rubros: [string];
            ubicacion: string;
            estado: string;
            observaciones: string
    };
    retesteos:{
            admiteRetesteo: boolean,
            Retesteo: {
                    admite: boolean,
                    numero: number,
                    fecha:{
                            realizacion: Date,
                            vencimiento: Date,
                    }
            }
    }
}

export class Cliente  {
  _id: string;
  identificacion: {
    nombre: string,
    codigo: string,
    marca: string,
    nProducto: string,
    lote: string,
    CAS: string,
    codigoSenasa: string
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
retesteos:{
    admiteRetesteo: boolean,
    retesteo: {
            admite: boolean,
            numero: number,
            fecha:{
                    realizacion: Date,
                    vencimiento: Date,
            }
    }
}

  constructor(droga) {
    this._id = null;
    this.identificacion.nombre = droga.identificacion.nombre.value;
    this.identificacion.codigo = droga.identificacion.codigo.value;
    this.identificacion.marca = droga.identificacion.marca.value;
    this.identificacion.nProducto = droga.identificacion.nProducto.value;
    this.identificacion.lote = droga.identificacion.lote.value;
    this.identificacion.CAS = droga.identificacion.CAS.value;
    this.identificacion.codigoSenasa = droga.identificacion.codigoSenasa.value;
    this.informacion.pureza = droga.informacion.pureza.value;
    this.informacion.humedad = droga.informacion.humedad.value;
    this.informacion.fecha.recepcion = droga.informacion.fecha.recepcion.value;
    this.informacion.fecha.vencimientoCertificado = droga.informacion.fecha.vencimientoCertificado.value;
    this.informacion.cantidad.recibida = droga.informacion.cantidad.recibida.value;
    this.informacion.cantidad.remanente = droga.informacion.cantidad.remanente.value;
    this.informacion.DLDC.libre = droga.informacion.DLDC.libre.value;
    this.informacion.DLDC.masaDL = droga.informacion.DLDC.masaDL.value;
    this.informacion.DLDC.masaDC = droga.informacion.DLDC.masaDC.value;
    this.informacion.DLDC.fDLDC = droga.informacion.DLDC.fDLDC.value;
    this.informacion.DLDC.masaDL = droga.informacion.DLDC.masaDL.value;
    this.informacion.sectores = droga.informacion.sectores.value;
    this.informacion.rubros = droga.informacion.rubros.value;
    this.informacion.ubicacion = droga.informacion.ubicacion.value;
    this.informacion.estado = droga.informacion.estado.value;
    this.informacion.observaciones = droga.informacion.observaciones.value;
    this.informacion.certificados = droga.informacion.certificados.value;
    this.retesteos.admiteRetesteo = droga.retesteos.admiteRetesteo.value;
    this.retesteos.retesteo.admite = droga.retesteos.retesteo.admite.value;
    this.retesteos.retesteo.fecha.realizacion = droga.retesteos.retesteo.fecha.realizacion.value;
    this.retesteos.retesteo.fecha.vencimiento = droga.retesteos.retesteo.fecha.vencimiento.value;
 




  }
}
