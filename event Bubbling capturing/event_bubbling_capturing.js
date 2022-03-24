document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandParent");
  },
  false
); //By default it is false for bubbling
//true for event capturing
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child");
    e.stopPropagation(); //stops the propagation cycle ie: bubbling and capturing
  },
  false
);
//if true put e.stopPropagation in grandParent
