function makePizza(flavour) {
  setTimeout(function () {
    console.log("preparing Pizza");
    return "Prepared " + flavour + "Pizza";
  }, 1000);
  return "Order Recieved of " + flavour + " Pizza";
}

console.log(makePizza("fajita"));
