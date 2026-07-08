console.clear();

function makePiza(flavour, callback) {
  console.log("Order recieved");
  console.log("preparing Pizza");
  setTimeout(function () {
    callback(flavour + " is ready");
  }, 1000);
}

function handlePizza(Pizza) {
  console.log("Eating " + Pizza);
}

makePiza("fajita", handlePizza);
console.log("Pizza Ordered1");
