/* 
function hello() {
    console.log("hello Api")
    
}
setTimeout(hello, 5000); // 5000ms = 5s

                 OR

console.log("one")
console.log("two")

setTimeout(() => {
    console.log("hello Api") 
}, 5000);

console.log("three")
console.log("four")

callback :- A callback is a function passed as an argument to another function
callback hell:- nested callback stacked below one function forming a pyramid structure

*/

/*---------------------------Promise-------------------------*/


// let promise = new Promise((res, rej)=>{
// console.log("resolve");
// reject()
// })


/*---------------------Promise Using .then() & .catch()------------------*/

// const getPromise = () =>{
//     return new Promise((resolve, reject) =>{
//         console.log("I am a promise");
//         resolve(" promise success");
//     });
// };
// let promise = getPromise();


// promise.then((res)=>{
//     console.log("success", res);
// });

// promise.catch((err) =>{
//     console.log("rejected", err)
// });


/*=====================Promise Chaining=============================*/

function asyncfunc1(getData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1",getData);
      resolve("success");
    }, 4000);
  });
}


function asyncfunc2(getData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2",getData);
      resolve("success");
    }, 4000);
  });
}



asyncfunc1(1)
.then((res) => {
    console.log(res)
    asyncfunc2(2)
    .then((res)=>{
        console.log(res)
    });
  });
 






