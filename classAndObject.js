class ToyotaCar {
  //To create a construtor to do some initialization during run time
  constructor(brand, mileage) {
    console.log("create a object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

//To create a object for toyota car

let fortuner = new ToyotaCar("fortunner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus)

