let x = 10;
let y = x;
x = 20;
console.log(y);

let user = { name: "ahmad", email: "ahmad@gamil.com" };
let anotherUser = user; //shallow copy
let user1 = { ...user }; //deep copy
user.name = "ali";
console.log(user);
console.log(anotherUser);
console.log(user1);
// console.log(...user);//cannot do this
