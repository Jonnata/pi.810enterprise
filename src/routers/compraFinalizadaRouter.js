var express = require('express');
var router = express.Router();

const comprafinalizadaController = require('../controllers/compraFinalizadaController');


router.get('/comprafinalizada', compraFinalizadaController.renderCompraFinalizada);

module.exports = router;