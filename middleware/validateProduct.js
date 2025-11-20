module.exports = (req, res, next) => {
    const { name, description, price, category, inStock } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({ error: "name, price, and category are required fields" });
    }

    next();
};
