const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const Cliente = require ('./models/cliente');

const app = express();

mongoose.connect('mongodb://localhost/sasin',{ useNewUrlParser: true } )
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
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
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


module.exports = app;
