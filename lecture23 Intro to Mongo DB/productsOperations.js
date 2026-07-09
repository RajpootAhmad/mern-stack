const productModel = require("./models/ProductModel");

const createProduct = async (title, price, tags) => {
  console.log("create Product");
  let product = new productModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const updateProduct = async (_id, title, price, tags) => {
  console.log("update Product");
  let product = await productModel.findById(_id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  let products = await productModel.find();
  return products;
};

const deleteProduct = async (_id) => {
  let product = await productModel.findOneAndDelete(_id);
  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
