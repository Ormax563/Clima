const express = require('express')
const app = express();
const hbs = require('hbs');
const clima = require('./controlador/clima')
    //__dirname= nombre del directorio donde esta corriendo 
    // en esta carpeta public estan todos los archivos estaticos 
    //servidor estatico
let tQ;
let tG;
let tM;
let tB;


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
    let clim = await clima.getClima(-0.19, -78.5).then(function(dato) {
        tQ = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}
const getInfo2 = async() => {

    var clim = await clima.getClima(-2.1961601, -79.8862076).then(function(dato) {
        tG = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}

const getInfo3 = async() => {

    var clim = await clima.getClima(-3.7025600, 40.4165000).then(function(dato) {
        tM = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}
const getInfo4 = async() => {

    var clim = await clima.getClima(2.3486000, 48.8534000).then(function(dato) {
        tB = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}
getInfo();
getInfo2();
getInfo3();
getInfo4();
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "jeSús",
        gradosQ: tQ,
        gradosG: tG,
        anio: new Date().getFullYear()
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        img: 'assets/img/tf.png',
        gradosM: tM,
        gradosB: tB,
        nombre: "Jesús"
    });
});

// app.get('/about',(req,res)=>{
//   res.send('Esta es mi primera web app');
// });

app.listen(3005, () => {
    console.log('Escuchando peticiones en el puerto 3005');
});