//WAP to guess the number in wright or wrong
let num=25;
let guess = parseInt(prompt("Enter you number"))

if(num === guess){
    console.log("number is correct");
}else{
    console.log("num in not correct")
}

while (guess != num ) {
    guess = parseInt(prompt("Guess again"))
}
console.log("you enter right number")


