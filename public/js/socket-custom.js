var socket = io();

//Escucha cuanndo conectado
socket.on('connect', function() {
    console.log('Conectado al Servidor');
})

//Escucha cuando se desconecta
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

//Enviar informacion.
socket.emit('enviarMensaje', {
    usuario: 'Eduardo',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});