const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const Cliente = require ('./models/cliente');
const Droga = require ('./models/droga');

const app = express();

mongoose.connect('mongodb://localhost/lims',{ useNewUrlParser: true } )
  .then(() => {
    console.log('Conectado a MongoDB')
  })
  .catch(() => {
    console.log('Fallo la coneccion')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
   // res.setHeader("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH,PUT, DELETE, OPTIONS");
   next();
});

app.get('/api', (req, res, next) => {
  Cliente.find()
    .then( documents => {
      console.log(documents);
      res.status(200).json({
        message: "Datos enviados",
        data: documents
      })
      
    })
})

app.post('/api', (req, res, next) => {
  const cliente = new Cliente({
        grupo: req.body.grupo,
        nombre: req.body.nombre,
        cuit: req.body.cuit,
        direccion: {direccion: req.body.direccion.direccion, localidad: req.body.direccion.localidad, codigoPostal: req.body.direccion.codigoPostal},
  });
  console.log("se ejecuta")
 cliente.save()
  .then(result => {
    res.status(201).json({
      message: "Cliente nuevo guardado",
      result: result
    });
  })
  .catch(err => {
    console.log("error")
    res.status(500).json({
      message: err
    })
  })

  
  
})

app.get('/api/drogas', (req,res, next) => {
drogas = Droga.find({}).then(documents => {
  res.status(200).json(documents)
})
//.catch(console.log(err))
});

app.get('/api/drogasSI', (req,res, next) => {
  drogas = Droga.find({}).then(documents => {
    res.status(200).json(documents)
  })
  //.catch(console.log(err))
  });

app.post('/api/drogas', (req, res, next) => {
  const droga = new Droga({
    identificacion: {
      nombre: req.body.identificacion.nombre,
      codigo: req.body.identificacion.codigo,
      marca: req.body.identificacion.marca,
      nProducto: req.body.identificacion.nProducto,
      lote: req.body.identificacion.lote,
      CAS: req.body.identificacion.CAS,
      codigoSenasa: req.body.identificacion.codigoSenasa,
      estandarInterno: req.body.identificacion.estandarInterno
},
informacion: {
      pureza: req.body.informacion.pureza,
      humedad: req.body.informacion.humedad,
      fecha: {
              recepcion: req.body.informacion.fecha.recepcion,
              vencimientoCertificado: req.body.informacion.fecha.vencimientoCertificado,
      },
      cantidad: {
              recibida: {masa: req.body.informacion.cantidad.recibida.masa, unidad: req.body.informacion.cantidad.recibida.unidad},
              remanente: {masa: req.body.informacion.cantidad.remanente.masa, unidad: req.body.informacion.cantidad.remanente.unidad}
      },
      DLDC: {
              libre: req.body.informacion.DLDC.libre,
              masaDL: req.body.informacion.DLDC.masaDL,
              masaDC: req.body.informacion.DLDC.masaDC,
              fDLDC: req.body.informacion.DLDC.fDLDC,
      },
      sectores: req.body.informacion.sectores,
      rubros: req.body.informacion.rubros,
      ubicacion: req.body.informacion.ubicacion,
      estado: req.body.informacion.estado,
      observaciones: req.body.informacion.observaciones
},
  });
 droga.save()
  .then(result => {
    res.status(201).json({
      message: "Droga nueva guardado",
      result: result
    });
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      message: err
    })
  })
})

app.put('/api/drogas/:id', (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  Droga.findOne({_id: id}).then( (doc, err) => {
    if (err) {console.log(err);
    res.status(500).send();
    return
  } else {
      doc.identificacion.nombre= req.body.identificacion.nombre,
      doc.identificacion.codigo= req.body.identificacion.codigo,
      doc.identificacion.marca= req.body.identificacion.marca,
      doc.identificacion.nProducto= req.body.identificacion.nProducto,
      doc.identificacion.lote= req.body.identificacion.lote,
      doc.identificacion.CAS= req.body.identificacion.CAS,
      doc.identificacion.codigoSenasa= req.body.identificacion.codigoSenasa,
      doc.identificacion.estandarInterno= req.body.identificacion.estandarInterno,
      doc.informacion.pureza= req.body.informacion.pureza,
      doc.informacion.humedad= req.body.informacion.humedad,
      doc.informacion.fecha.recepcion= req.body.informacion.fecha.recepcion,
      doc.informacion.fecha.vencimientoCertificado= req.body.informacion.fecha.vencimientoCertificado,
      doc.informacion.cantidad.recibida= {masa: req.body.informacion.cantidad.recibida.masa, unidad: req.body.informacion.cantidad.recibida.unidad},
      doc.informacion.cantidad.remanente= {masa: req.body.informacion.cantidad.remanente.masa, unidad: req.body.informacion.cantidad.remanente.unidad},
      doc.informacion.DLDC= {
              libre: req.body.informacion.DLDC.libre,
              masaDL: req.body.informacion.DLDC.masaDL,
              masaDC: req.body.informacion.DLDC.masaDC,
              fDLDC: req.body.informacion.DLDC.fDLDC,
      },
      doc.informacion.sectores= req.body.informacion.sectores,
      doc.informacion.rubros= req.body.informacion.rubros,
      doc.informacion.ubicacion= req.body.informacion.ubicacion,
      doc.informacion.estado= req.body.informacion.estado,
      doc.informacion.observaciones= req.body.informacion.observaciones

      doc.save().then(result=> {
          res.status(201).json({
          message: "Droga actualizada",
          result: result
        }); 
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: err
        })
      }) 
  }
  })
})





app.delete('/api/drogas/:id', (req, res, next) =>{
  Droga.deleteOne({_id: req.params.id}).then(result => {
     console.log(result);
     res.status(201).json({
       message: "Droga Eliminada",
       result: result
     });
     console.log(res.message)
     console.log(res.result)
   })
   .catch(err => {
     console.log(err)
     res.status(500).json({
       message: err
     })
   })
})

app.get('/api/drogas/:id', (req, res, next) =>{
  Droga.findById({_id: req.params.id}).then(result => {
     res.status(200).json({
       message: "Datos Droga",
       result: result
     });
   })
   .catch(err => {
     console.log(err)
     res.status(500).json({
       message: err
     })
   })
})
module.exports = app;
