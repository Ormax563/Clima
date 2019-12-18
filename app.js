//creamos servidor web
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    let salida = {
            nombre: 'Jesús',
            edad: '21',
            url: req.url
        }
        //cambiamos a aplicacion json
        //creamos un objeto json
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8085);

console.log('Escuchando en el puerto 8085');
//app que brinde servicios web