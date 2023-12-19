const URL = 'https://cat-fact.herokuapp.com/facts';

const getData = async()=>{
    console.log("getting data...")
    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    console.log(data)
}

