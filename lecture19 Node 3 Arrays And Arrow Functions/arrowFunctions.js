function test(name) {
  if (name == "ali") return true;
  else return false; //this function cn be written as name=="Ali"? true:false;
}

const testa = (name) => (name == "ali" ? true : false); //this is a function with input name;

console.clear();
console.log(testa("ali"));
console.log(5 == 6 ? "helo" : "oye");
console.log(5 < 6 && "5 is not greater then 6");
