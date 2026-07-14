var mongoose = require("mongoose");

// 1. Unified the name to 'productSchema' and changed price type to Number
var productSchema = mongoose.Schema({
  name: String,
  price: Number,
});

// 2. Compiling the model using the exact matching variable name
const Product = mongoose.model("Product", productSchema);

// 3. Exporting the actual compiled model variable
module.exports = Product;
