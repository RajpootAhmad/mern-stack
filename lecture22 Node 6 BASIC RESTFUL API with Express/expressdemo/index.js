console.clear();
const express = require("express");
const app = express();
app.use(express.json());
const products = ["laptops", "LCD", "Mobile"];

app.get("/", (req, res) => {
  res.send("Hello World");
});

//first parameter is url
// and 2nd is function to recieve req and to response
app.get("/api/products", (req, res) => res.send(products));

app.get("/api/products/:index", (req, res) =>
  !products[req.params.index]
    ? res.status(400).send("Product not found")
    : res.send(products[req.params.index]),
);

app.put("/api/products/:index", (req, res) => {
  //console.log(req.body);
  products[req.params.index] = req.body.name;
  !products[req.params.index]
    ? res.status(400).send("Product not found")
    : res.send(products[req.params.index]);
});

app.delete("/api/products/:index", (req, res) => {
  //console.log(req.body);
  products.splice(req.params.index, 1);
  res.send(products);
});

app.post("/api/products/:index", (req, res) => {
  //console.log(req.body);
  products.push(req.body.name);
  res.send(products);
});
app.listen(3000);
