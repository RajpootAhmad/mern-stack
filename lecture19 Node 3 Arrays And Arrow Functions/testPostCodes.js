console.clear();
let postcodes = require("./UK postcode districts.json");
console.log(postcodes.features.length);
let obj = postcodes.features.find((p) => {
  return p.properties.postcodes === 1779;
});

console.log(obj);
console.log(postcodes.features.slice(200,202));
//postcodes": 1779,
