const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const db = require('./db.json');

const app = express();
app.route('/tickets') 
.get((req, res) => { res.send("Petición GET en /tickets"); } )

app.route('/ticket/:id')
.get((req, res) => { res.send("Peticion GET en /tickets/:id"); } )

app.route('/ticket/:id')
.get((req, res) => { res.send("Peticion GET en /tickets/:id"); } )

app.route('/nueva')
.post((req, res) => { res.send("Peticion POST en /nueva"); } )

app.route('/actualizaticket/:id/:completada')
.get((req, res) => { res.send("Peticion GET en /actualizaticket/:id/:completada"); } )

app.route('/borraticket/:id')
.get((req, res) => { res.send("Peticion GET en /borraticket/:id"); } )

app.route('/editar')
.post((req, res) => { res.send("Peticion POST en /editar"); } )

app.listen(1234);
