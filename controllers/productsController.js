const { v4: uuidv4 } = require('uuid');
let products = require('../data/products');

// GET all products + filter + pagination + search
exports.getProducts = (req, res) => {
    const { category, search, page = 1, limit = 5 } = req.query;

    let result = [...products];

    if (category) {
        result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
        result = result.filter(p => 
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    const start = (page - 1) * limit;
    const paginated = result.slice(start, start + Number(limit));

    res.json({
        total: result.length,
        page: Number(page),
        limit: Number(limit),
        data: paginated
    });
};

// GET product by ID
exports.getProductById = (req, res, next) => {
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
        return next({ status: 404, message: "Product not found" });
    }

    res.json(product);
};

// CREATE product
exports.createProduct = (req, res) => {
    const newProduct = {
        id: uuidv4(),
        ...req.body
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

// UPDATE product
exports.updateProduct = (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);

    if (index === -1) {
        return next({ status: 404, message: "Product not found" });
    }

    products[index] = { ...products[index], ...req.body };

    res.json(products[index]);
};

// DELETE product
exports.deleteProduct = (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);

    if (index === -1) {
        return next({ status: 404, message: "Product not found" });
    }

    const deleted = products.splice(index, 1);

    res.json(deleted[0]);
};


// STATS: Count products by category
exports.getProductStats = (req, res) => {
    const stats = {};

    products.forEach(product => {
        if (!stats[product.category]) {
            stats[product.category] = 0;
        }
        stats[product.category]++;
    });

    res.json(stats);
};
