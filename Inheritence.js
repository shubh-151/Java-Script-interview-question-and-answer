// Inheritence is passing down properties and method from parent to child

// class Parent{
//     hello(){
//         console.log("hello")
//     }

// }

// class Child extends Parent{
//     work(){
//         console.log("work")
//     }
// }

// let obj = new Child();




class Person{

    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing")
    }
}

class Engineer extends Person{
    work(){
        console.log("engineer work")
    }
}



class Doctor extends Person{
    work(){
        console.log("docter work")
    }
}

let shubhamObj = new Person();