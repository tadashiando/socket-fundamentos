const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: "Bemvindo!"
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //Broadcast es para enviar a todos
        client.broadcast.emit('enviarMensaje', data);


        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo salió bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!'
        //     })
        // }
    })
});