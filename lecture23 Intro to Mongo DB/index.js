console.clear();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productsOperations");
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mernstack")
  .then(async () => {
    console.log("connection1 to MongoDB created");
    //let product = await createProduct("intel", 300, ["n", "un"]);
    // console.log(product);
    // let allProducts = await getAllProducts();
    // console.log(allProducts);
    // console.log(await deleteProduct("6a4f9f43b07066be964aa4b6"));
    let updateProd = await updateProduct(
      "6a4fa5e0f8e2941daa2716d4",
      "intel updated",
      600,
      [],
    );
  })
  .catch((err) => {
    console.log("Error in connection");
    console.log(err);
  });
app.listen(3000);
