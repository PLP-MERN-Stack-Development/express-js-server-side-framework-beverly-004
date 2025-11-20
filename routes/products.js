const express = require('express');
const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductStats
} = require('../controllers/productsController');

const validateProduct = require('../middleware/validateProduct');


// STATS ROUTE MUST COME BEFORE /:id
router.get('/stats/category', getProductStats);

// GET all products
router.get('/', getProducts);

// GET product by ID
router.get('/:id', getProductById);

// CREATE product
router.post('/', validateProduct, createProduct);

// UPDATE product
router.put('/:id', validateProduct, updateProduct);

// DELETE product
router.delete('/:id', deleteProduct);

module.exports = router;
