const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const db = require('./db.json');

const app = express();
app.route('/tickets') 
.get((req, res) => { res.send(db); } )

app.route('/ticket/:id')
.get((req, res) => { res.send(db.tickets[0].id); } )

app.route('/nueva')
.post((req, res) => { 
  const { titulo, descripcion } = req.body;
const otratarea = { // Construcción de la nueva tarea
id: uuid.v4(), titulo, descripcion, terminada: false, 
} )

app.route('/actualizaticket/:id/:completada')
.get((req, res) => { res.send("Peticion GET en /actualizaticket/:id/:completada"); } )

app.route('/borraticket/:id')
.get((req, res) => { res.send("Peticion GET en /borraticket/:id"); } )

app.route('/editar')
.post((req, res) => { res.send("Peticion POST en /editar"); } )

app.listen(1234);
