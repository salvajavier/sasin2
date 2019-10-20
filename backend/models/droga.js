const mongoose = require ('mongoose');

const drogaSchema = mongoose.Schema({
        identificacion: {
                nombre: String,
                codigo: String,
                marca: String,
                nProducto: String,
                lote: String,
                CAS: String,
                codigoSenasa: String
        },
        informacion: {
                pureza: Number,
                humedad: Number,
                fecha: {
                        recepcion: Date,
                        vencimientoCertificado: Date,
                },
                cantidad: {
                        recibida: {masa: Number, unidad: String},
                        remanente: {masa: Number, unidad: String}
                },
                DLDC: {
                        libre: Boolean,
                        masaDL: Number,
                        masaDC: Number,
                        fDLDC: Number,
                },
                sectores: [String],
                rubros: [String],
                ubicacion: String,
                estado: String,
                observaciones: String
        },
        retesteos:{
                admiteRetesteo: Boolean,
                Retesteo: {
                        admite: Boolean,
                        numero: Number,
                        fecha:{
                                realizacion: Date,
                                vencimiento: Date,
                        }
                }
        }

});

module.exports = mongoose.model('Droga', drogaSchema);
