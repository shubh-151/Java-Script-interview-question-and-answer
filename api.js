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

// 

/*=========================Async & Await =========================*/

function getData(dataId) {
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            console.log("success")
            res("sucess");
        },2000)
    })     
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);   
}