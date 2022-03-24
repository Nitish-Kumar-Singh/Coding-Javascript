// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
  
  
  //install lodash for deep copy
  
  const lodash=require('lodash')
   let developer={
      name:'nitish',
      skills:{
         primary:'React',
         sec:'node'
      }
      age:function (params){
          return 30;
      },
      joiningDate:new Date();
      
  }
  
//   let developer2=JSON.parse(JSON.stringify(developer))
//   let developer2=developer;
  let developer2=lodash.cloneDeep(developer1);
  developer2.skills.primary='nothing'
    console.log(developer);
  console.log(developer2);
  
  
  
//   //works until you have function here
//   let developer={
//       name:'nitish',
//       skills:{
//          primary:'React',
//          sec:'node'
//       }
//   }
  
//   let developer2=JSON.parse(JSON.stringify(developer))
// //   let developer2=developer;
  
//   developer2.skills.primary='nothing'
//     console.log(developer);
//   console.log(developer2);
  
  
  
  
  
  
  
    //spread operator do the partially deep copy
// let obj1={
//     name:'nitish'
// }
// // let obj2=Object.assign({},obj1) 
// // let obj2={...obj1};
// obj1.name="dhjs"
// console.log(obj1)
// console.log(obj2)
