// const hello = function (words) {
//   console.log(words);
// };
// hello("hello world");

//IIFE immediately invoked function expression
//used for data privacy

(function (words) {
  var name = "nitish";
  console.log(name + words);
})("hello World");
