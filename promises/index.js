// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "nitish" });
//   }, 1000);
// });
// promise.then((item) => {
//   console.log(item);
// });

//fetch
// let users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((user) => {
//     return user.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

//promise.all :: gives error if one is reject
//Promise.allSettled :: give the status resolve and reject
//Promise.race ::only give the one which resolves first
let data = Promise.allSettled ([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second"); //reject("1 s ec")
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("2 second");
    }, 2000);
  }),
]);

data
  .then((item) => {
    console.log(item);
  })
  .catch((err) => {
    console.log("error" + err);
  });
