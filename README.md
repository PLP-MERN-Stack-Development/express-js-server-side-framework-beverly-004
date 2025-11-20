# Express.js RESTful API – Week 2 Assignment

This project is part of the PLP MERN-Stack Development training.  
It implements a complete RESTful API using **Express.js**, including routing, middleware, error handling, authentication, filtering, pagination, and searching.



 Features Implemented

 Basic Server Setup
- Express.js server running on **port 3000**
- Root route (`GET /`) responding with `"Hello, Express.js!"`

 CRUD Routes for Products
- `GET /api/products` – List all products  
- `GET /api/products/:id` – Get product by ID  
- `POST /api/products` – Create a new product  
- `PUT /api/products/:id` – Update a product  
- `DELETE /api/products/:id` – Delete a product  

### ✔ Middleware (Custom & Built-in)
- **Logger Middleware** – logs request method, URL, and timestamp  
- **Body Parser Middleware** – parses JSON request bodies  
- **Authentication Middleware** – checks API key `x-api-key`  
- **Validation Middleware** – validates product input  

### ✔ Advanced API Features
- Filtering products by category  
- Pagination using `page` and `limit` query params  
- Searching by product name  
- In-memory data storage (`data/products.js`)  

### ✔ Error Handling
- Global error handler  
- Custom error messages for 400, 401, 404, and 500  
- Clean JSON error responses  
- Handles async and sync errors  





##  Installation & Setup

### 1. Clone the repository
```bash
git clone <your-classroom-repo-url>
cd express-js-server-side-framework-beverly-004


#instal dependencies

npm install

the server will run at

http://localhost:3000


Authentication

Most API routes require an API key.
Send the header:

x-api-key: 12345


Example in Thunder Client or Postman:

KEY	VALUE
x-api-key	12345


API Endpoints Documentation
➤ GET /api/products

Returns all products with pagination, search, and filtering.

Query parameters:

?category=electronics

?search=laptop

?page=2&limit=5

Example:

GET /api/products?category=general&page=1&limit=5



➤ GET /api/products/:id

Returns a single product by ID.

GET /api/products/1

➤ POST /api/products

Create a new product.

Headers:

x-api-key: 12345
Content-Type: application/json


Body example:

{
  "name": "Laptop",
  "description": "Fast laptop",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}

➤ PUT /api/products/:id

Update an existing product.

PUT /api/products/1

➤ DELETE /api/products/:id

Deletes a product.

DELETE /api/products/1

🧪 Example Successful Response
{
  "total": 1,
  "page": 1,
  "limit": 5,
  "data": [
    {
      "id": "1",
      "name": "Sample Product",
      "description": "This is a sample product",
      "price": 99.99,
      "category": "general",
      "inStock": true
    }
  ]
}



How to Test the API (Thunder Client or Postman)
Step 1 — Start your server
npm start


the API is now running at:

http://localhost:3000

Step 2 — Add the required API key

Every request (except /) must include this header:

KEY	VALUE
x-api-key	12345

Without this header, you will get:

{ "error": "Unauthorized - Invalid API Key" }

Step 3 — Send your requests in Thunder Client or Postman

Choose one:

Thunder Client (VS Code extension)

Postman

curl

📘 API Endpoint Documentation



🔵 1. GET /api/products

Retrieve all products, supports:

-Filtering

-Searching

-Pagination

Example URL:
GET http://localhost:3000/api/products?category=general&page=1&limit=5

Example Headers:
x-api-key: 12345

Example Response:
{
  "total": 1,
  "page": 1,
  "limit": 5,
  "data": [
    {
      "id": "1",
      "name": "Sample Product",
      "description": "This is a sample product",
      "price": 99.99,
      "category": "general",
      "inStock": true
    }
  ]
}

🔵 2. GET /api/products/:id

Retrieve a single product by ID.

Example:
GET http://localhost:3000/api/products/1

Response:
{
  "id": "1",
  "name": "Sample Product",
  "description": "This is a sample product",
  "price": 99.99,
  "category": "general",
  "inStock": true
}

🔵 3. POST /api/products

Create a new product.

Headers:
x-api-key: 12345
Content-Type: application/json

Body:
{
  "name": "Laptop",
  "description": "Fast laptop",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}

Response:
{
  "id": "f3ad1fdf-8a12-4a56-9b2d-6c899f14efba",
  "name": "Laptop",
  "description": "Fast laptop",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}

🔵 4. PUT /api/products/:id

Update an existing product.

Example:
PUT http://localhost:3000/api/products/1

Body:
{
  "price": 2000
}

Response:
{
  "id": "1",
  "name": "Sample Product",
  "description": "This is a sample product",
  "price": 2000,
  "category": "general",
  "inStock": true
}

🔵 5. DELETE /api/products/:id

Delete a product by ID.

Example:
DELETE http://localhost:3000/api/products/1

Response:
{
  "id": "1",
  "name": "Sample Product",
  "description": "This is a sample product",
  "price": 99.99,
  "category": "general",
  "inStock": true
}

. GET /api/products/stats/category

Returns product statistics grouped by category.

Example:
GET http://localhost:3000/api/products/stats/category

Response:
{
  "general": 1
}


Environment Variables

Create a .env.example file:

API_KEY=12345
PORT=3000
