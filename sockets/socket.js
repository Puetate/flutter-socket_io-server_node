
const {io} = require('../index');
//SOckets
io.on('connection', (client) => {

    console.log('cliente conectado');

    client.on('disconnect', () => {

        console.log('cliente desconectado');

    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje llego', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje desde emit ' })
    })
});