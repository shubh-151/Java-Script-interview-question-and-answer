import React, { useRef, useState } from 'react'

const RefHook = () => {
//const [first, setFirst] = useState(0);
const inputRef=useRef(0);



// const stateInc = () =>{
//     setFirst(first+1);
// }

// const refInc = () =>{
//     inputRef.current = inputRef.current+1;
//     console.log(inputRef.current);
// }

const clickMe =()=>{
    console.log(inputRef.current)
}
  return (
    <div>
        <h1>useRef hook</h1>
        {/* <h1>ref - {inputRef.current}</h1>
      <h1>state - {first}</h1>
      <button onClick={stateInc}>State Inc</button>
      <span>{inputRef.current}</span>
      <button onClick={refInc}>Ref Inc</button> */}

    <input type="text" placeholder='type here' ref={inputRef}/>
    <button onClick={clickMe}>click me</button>


    </div>
  )
}

export default RefHook
