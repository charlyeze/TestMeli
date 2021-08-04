const express = require('express');
const router = express.Router(); 
const ItemController = require('../controllers/item'); 

router.get('/',  ItemController.traer_todos); 
router.get('/:objetoId', ItemController.objeto_get_id); 

module.exports = router;