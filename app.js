const express = require("express");
const bodyParser = require("body-parser");
const cors =require("cors");
const app = express();
const port = process.env.PORT || 3000;

const {Client} = require('pg');
const { response } = require("express");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//Conexión a la base de datos
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Clinica_Dental',
    password: '12345',
    port: 5432,
  })
 client.connect();

app.get("/citas",(req,res)=>{
    client.query('SELECT * FROM "Cita"')
    .then(response => {
        console.log(response.rows)
        res.json(response.rows);
        //client.end()
    })
    .catch(err=>{
        console.log(err);
        
        client.end();
    })
});

app.get("/pacientes",(req,res)=>{
    client.query('SELECT * FROM "Paciente"')
    .then(response => {
        console.log(response.rows)
        res.json(response.rows);
        //client.end()
    })
    .catch(err=>{
        console.log(err);
        
        client.end();
    })
});
app.listen(3000);
console.log('Server on port 3000');