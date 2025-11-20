const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);
app.use(bodyParser.json());
app.use(auth);

// Routes
app.use('/api/products', productRoutes);

// Hello World route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
