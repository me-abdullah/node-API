const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
  { id: 4, name: 'Product D' },
  { id: 5, name: 'Product E' },
  { id: 6, name: 'Product F' },
  { id: 7, name: 'Product G' },
  { id: 8, name: 'Product G' },
  { id: 9, name: 'Product I' },
  { id: 10, name: 'Product J' },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// Add a new product
app.post('/api/products', (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name
  };
  products.push(product);
  res.status(201).json(product);
});

// Update a product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  product.name = req.body.name;
  res.json(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  const index = products.indexOf(product);
  products.splice(index, 1);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
