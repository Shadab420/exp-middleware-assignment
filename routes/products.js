var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/', productsController.root, productsController.productDetails, productsController.allProducts);
router.get('/productDetails', productsController.productDetails); 
router.get('/allProducts', productsController.allProducts);

module.exports = router;