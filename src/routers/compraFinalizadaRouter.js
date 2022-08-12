var express = require('express');
var router = express.Router();

const compraFinalizadaController = require('../controllers/compraFinalizadaController');


router.get('/compraFinalizada', compraFinalizadaController.renderCompraFinalizada);

module.exports = router;