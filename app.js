const dotenv = require('dotenv').config()
const express = require('express');
const config = require('config');
const dbInit = require('./src/config/db');
const morgan = require('morgan');
const path = require('path');

//? MODULOS PROPIOS
const userRouter = require('./src/routes/usuarios');
const consorcioRouter = require('./src/routes/consorcio');
const categoriaRouter = require('./src/routes/categoria');
const peajeRouter = require('./src/routes/peaje')
const tarifaRouter = require('./src/routes/tarifa')
const authRouter = require('./src/routes/auth')

//? SERVIDOR
const app = express();

//? SETTINGS
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development'
//? Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//* RUTAS
app.use(userRouter);
app.use(consorcioRouter);
app.use(categoriaRouter);
app.use(peajeRouter);
app.use(tarifaRouter);
app.use(authRouter)

//* Static files
app.use(express.static(path.join(__dirname, 'src/public')));

//? EJECUTAR EL SERVER
app.listen(port, () => { console.log(`Servicio corriendo correctamente en el puerto ${port} ... \n${config.get('nombre')}`) });
