// const path = require('path');

const express = require('express');

// const rootDir = require('../utils/path');

const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getProduct);

module.exports = router;