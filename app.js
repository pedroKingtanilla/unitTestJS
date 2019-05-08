'use strict'
const fastify = require('fastify')({
    logger: true
});

//Se incluye servicios
const routes = require('./routes/indexRoutes');

routes.forEach((route, index) => {
    fastify.route(route);
});

// configuración del servidor
const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0', function (err, address) {
            if (err) {
                console.log('mantenedorswitchrector', 'Error', err);
                process.exit(1)
            }
            console.log('mantenedorswitchrector', 'servidor listo, en el puerto: ', fastify.server.address().port);
        })

    } catch (err) {
        console.log('mantenedorswitchrector', 'Error', err);
        process.exit(1);
    }
    process.on('SIGTERM', fastify.close.bind(fastify))
}
start();