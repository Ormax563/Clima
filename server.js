const express = require('express')
const app = express();
const hbs = require('hbs');
//__dirname= nombre del directorio donde esta corriendo 
// en esta carpeta public estan todos los archivos estaticos 
//servidor estatico


app.use(express.static(__dirname + '/public'));
// EXPRESS HBS ENGINE
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');
hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras;
});

//servidor dinamico
var getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return temp;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "jeSús",
        gradosQ: getInfo("Quito"),
        gradosG: getInfo("Guayaquil"),
        anio: new Date().getFullYear()
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        img: 'assets/img/tf.png',
        gradosM: getInfo("Madrid"),
        gradosB: getInfo("Barcelona"),
        nombre: "Jesús"
    });
});

// app.get('/about',(req,res)=>{
//   res.send('Esta es mi primera web app');
// });

app.listen(3004, () => {
    console.log('Escuchando peticiones en el puerto 3004');
});