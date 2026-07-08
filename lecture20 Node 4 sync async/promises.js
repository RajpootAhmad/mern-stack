console.clear();

function makePiza(flavour) {
  return new Promise((resolve, reject) => {
    if (flavour != "macho") reject("only macho available");
    else {
      setTimeout(function () {
        console.log("preparing Pizza");
        resolve(flavour + " Pizza");
      }, 1000);
    }
  });
}

makePiza("macho")
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
//1. Pending
//2. Resolved
//3. Rejected
