const prueba = require('./pruebaController')

let getData = async(req, reply) => {

    /*
    let datos = prueba.prueba()    
    console.log('IndexController', datos)
    return datos;
    */
   reply.send('Hello Peter')
    //reply.code(200).send('hello World');
};

let getStubs = async(req, reply) => {
    if (req.user.isLoggedIn()) {

        return reply.send(prueba.pivote());
    }

    reply.send("Ooops. You need to log in to access this page");    
}

module.exports = {
    getData,
    getStubs
}