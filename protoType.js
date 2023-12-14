const employee = {
    calTax(){
        console.log("tax rate is 10%");
    },

    caltax2: function calTax3{
        console.log("tax rate is 20%");
    },

    // both are true
};


const karanArjun = {
    sallery : 50000,
    calTax2(){
       console.log("tax rate is 20%"); 
    } 
}

// how to create your own prototype 
karanArjun.__proto__= employee;