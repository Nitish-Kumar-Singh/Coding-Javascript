console.log("WElcome");

//spread operator
function sum(a, b) {
  return a + b;
}
const arr = [4, 5];
console.log(sum(...arr)); //spread the values of array

//Rest Operator
function sumTwo(...args) {
  //rest operator whwn you dont know how many arguments are come in
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumTwo(4, 5, 6));

// const arr = ["hi", "hello", "hi"];
// const countUnique = (arr) => {
//   const count = {};
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] = 1 + (count[arr[i]] || 0);
//   }
//   return count;
// };
// console.log(countUnique(arr));

// function palin(str) {
//   const arrStr = str.split("");
//   const rev = arrStr.reverse();
//   const revStr = rev.join("");
//   if (revStr === str) {
//     console.log("palindrome");
//   } else {
//     console.log("not");
//   }
// }
// palin("dadan");

// Anagram
//function checkPalindrome(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//       console.log("invalid");
//       return;
//     }
//     let s1 = a.split("").sort().join("");
//     let s2 = a.split("").sort().join("");
//     if (s1 === s2) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
