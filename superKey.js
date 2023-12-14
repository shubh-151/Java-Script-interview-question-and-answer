/* kabhi kabhi aisa kuch hota hai jha hm logo ko child se parent ke method ko 
ya fir construtor ko call krna padhta hai to wha hm super ka use krte hain.*/

class Person{
    constructor(){
        this.spacies = "homo sapiens";
    }
    
    eat(){
        console.log("eat")
    }   
}

class Engineer extends Person{
    constructor(branch){
        super();//to invoke parent class constructor
        super.eat()
        this.branch = branch;
    }
    work(){
        console.log("engineer work")
    }
}

let Obj = new Engineer("chemical");