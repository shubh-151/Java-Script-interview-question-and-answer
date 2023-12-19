const URL = 'https://cat-fact.herokuapp.com/facts';

const catFact = document.querySelector("#fact");
const btn = document.querySelector("#HitMe");

const getData = async()=>{
    let res = await fetch(URL);
    let data = await res.json();
    catFact.innerText = data[1].text;

}
btn.addEventListener("click", getData);


