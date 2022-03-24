// const age = 40;

// age > 30
//   ? age > 70
//     ? console.log("you are getting Old")
//     : console.log("you are betwen 30 to 59")
//   : console.log("you are below 30");

//fill

// const user = Array(5).fill(",");
// console.log(user);

//filter unique

// const user = ["a", "a", "b", "c", "d"];
// const unique = Array.from(new Set(user));
// console.log(unique);

//dynamic js
// const dynamic = "hobbies";

// const user = {
//   name: "nitish",
//   [dynamic]: "reading",
// };
// console.log(user);

//slicing
//get the first 3 value of array
// const users = [1, 2, 3, 4, 5, 6, 7];
// users.length = 3;
// console.log(users);

//get the last 3 value of array
// const users = [1, 2, 3, 4, 5, 6, 7];

// console.log(users.slice(-3));

console.log("Call Apply Bind");
const users=["sam","ted","talk","nord","sui","moh"]

//console.log(users.slice(1,3)) //gives value ["ted", "talk"]
users.splice(1,3,"HI")
console.log(users) //["sam", "HI", "sui", "moh"]

//convet array to object
// const users = [1, 2, 3, 4, 5, 6, 7];
// const userObject = { ...users };
// console.log(userObject);

//convert object to array
// const user = {
//   name1: "nit",
//   name2: "kum",
// };
// const arry = Object.values(user);
// console.log(arry);

//check the perfomance of code

// let startAt = performance.now();
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
// let endAt = performance.now();

// console.log(`${endAt - startAt} took time`);
