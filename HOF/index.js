console.log(",k,,");
// const hof = () => {
//   return function (title) {
//     console.log(`Hii ${name} ${title}`);
//   };
// };
// hof()("kumar");

function x() {
  console.log("x is callback function");
}
function y(x) {
  x();
  //y is hof
}
y(x);
