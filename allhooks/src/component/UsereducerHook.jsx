import React, { useReducer } from 'react'

const intialstate=0;
const reducer=(state,action)=>{
  switch (action) {
    case "Increment":
      return state+1;
    case "Decrement":
      return state-1;     
    default:
      return state;
  }
}

const UsereducerHook = () => {

const [count,dispatch] = useReducer(reducer, intialstate)

  return (
    <div>
      <h1>useReducer Hook</h1>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <span>{count}</span>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UsereducerHook
