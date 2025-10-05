import React, { useMemo, useState } from 'react'

const MemoHook = () => {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

const IncrementFun = ()=>{
  
  setCountOne(countOne+1);
}

const DecrementFun = ()=>{
  setCountTwo(countTwo+1);
}



const isEven = useMemo(() =>{ 
  
  console.warn(".........")
  let i=0;
  while(i<200000000) i++;
  return countOne%2===0
},[countOne])

  return (
    <>
    <h1>useMemo Hook</h1>
    <div className='bichobitch'>
      
      <button onClick={IncrementFun}>Increment  {countOne} </button>
      <span>{isEven?"Even": "Odd"}</span>
      <button onClick={DecrementFun}>Decrement  {countTwo} </button>
    </div>
    </>
  )
}

export default MemoHook
