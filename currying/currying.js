let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); //3 refers to the value of y

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3); //3 refers to the value of y
