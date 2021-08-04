const express = require('express');
const app = express();
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configurar cabeceras y cors
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3080, function () {
  console.log('Example app listening on port 3080!');
});