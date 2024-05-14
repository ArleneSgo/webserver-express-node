const hbs = require('hbs');
//helpers
//mostrar el año actual
hbs.registerHelper('getAnio', () => {
        return new Date().getFullYear();
    })
    //poner mayuscula la primera letra de cada palabra
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})