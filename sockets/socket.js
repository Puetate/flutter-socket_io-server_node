
const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');
const bands = new Bands();

bands.addBand(new Band('Queen'))
bands.addBand(new Band('Verde 70'))
bands.addBand(new Band('Elefante'))
bands.addBand(new Band('Alkaloides'))
console.log(bands);

//SOckets
io.on('connection', (client) => {

    console.log('cliente conectado');
    client.emit('active-bands', bands.getBands())

    client.on('disconnect', () => {

        console.log('cliente desconectado');

    });


    client.on('input-fuzzed', (payload) =>{
        //console.log(payload);
        io.emit('outputs-fuzzed', payload)
    });


});