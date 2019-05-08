// Import our Controllers
const dataMantenedor = require('../controller/indexController');

const routes = [
    {
        method: 'GET',
        url: '/getDataSFWeb',
        handler: dataMantenedor.getData
    }
]

module.exports = routes