console.log("Call Apply Bind");

let name = {
  firstname: "Nitish",
  lastname: "Kumar",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " " + state
  );
};
printFullName.call(name, "delhi", "aj");

let name2 = {
  firstname: "ahjha",
  lastname: "Kumar",
};

//function Borrowing
printFullName.call(name2, "mumbai", "kasja");

//only difference is that apply send all the parameter in a list format
printFullName.apply(name2, ["delhi", "mumbai"]);

//Bind Method:= Binds the object with the method and return the function
//returns a method which can be called later

let printMyName = printFullName.bind(name, "delhi", "aj");
console.log(printMyName);
printMyName();
