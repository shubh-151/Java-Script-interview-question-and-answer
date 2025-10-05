import React, { useCallback, useState } from 'react'
import Child from './Child.jsx'

const Parent = () => {
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const IncrementOne= () =>{
    setCounterOne(counterOne+1);
  }


  const fun=useCallback(()=>{
    console.log("hello shubh")    
  },[counterTwo]);

  

  return (
    <>
      <h1>UseCallback Hook</h1>
      <Child counterTwo={counterTwo} func={fun}/>
      <button onClick={IncrementOne}>counterOne:{counterOne}</button>
    </>
  )
}

export default Parent
