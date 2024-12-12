const Product = require('../model/product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.addProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const product = await Product.create({ name, quantity });
  res.status(201).json(product);
};
