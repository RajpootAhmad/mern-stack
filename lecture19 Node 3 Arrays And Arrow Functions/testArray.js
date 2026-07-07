let students = ["usama", "noia", "ali"];
console.log(students);
students[5] = "arian";
let searchedstds = students.find(function (std) {
  if (std == "ali") return 1;
  else return 0;
});
students.splice(1, 0, "zahid", "rahat");
console.log(searchedstds);

let rates = [2, 3, 5, 10];
let newrates = rates.map(function (r) {
  return r + 1;
});
console.log(rates);
console.log(newrates);

console.log(students);
console.log(...students);
students.sort(function customSort(a, b) {
  if (b < a) return -1;
  else 1;
}); //reverse order sorting
console.log(students);
