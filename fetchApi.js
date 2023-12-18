const URL = 'https://cat-fact.herokuapp.com/facts';

const catFact = document.querySelector("#fact")


const getFacts = async()=>{
    console.log("getting data......")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(catFact);
    
}
