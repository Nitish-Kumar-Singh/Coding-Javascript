let counter = 0;
const getData = () => {
  console.log("fetching data" + counter++);
};
const doSomeMagic = (fn, d) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};
const betterFunction = doSomeMagic(getData, 800);
