import { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNT = 5;
function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    for (let i = 0; i < OTP_DIGIT_COUNT; i++) {
      if (inputArr[i] === "") {
        refArr.current[i].focus();
        break;
      }
    }
  }, [inputArr]);

  const handleOnChange=(value,index)=>{
    if(isNaN(value)) return;
    console.log(value)
    const newArr=[...inputArr]
    newArr[index]=value.slice(-1);
    setInputArr(newArr)
  }
  const handleOnKeyDown=(e,index)=>{
    if(e.key==="Backspace" && inputArr[index]===""){
      if(index===0) return;
      refArr.current[index-1]?.focus();
      const newArr=[...inputArr]
      newArr[index-1]=""
      setInputArr(newArr)
    }
  } 

  return (
    <div className="app">
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input)=>(refArr.current[index]=input)}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => { handleOnKeyDown(e, index); // Implement this function
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
