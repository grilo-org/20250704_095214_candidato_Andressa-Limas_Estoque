const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/route/authRoutes');
const productRoutes = require('./src/route/productRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


const port = 3000;

app.get('/', (req, res) => {
  res.send('Sistema de Gestão de Estoque - Backend');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
