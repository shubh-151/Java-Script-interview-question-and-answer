
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider =(props)=>{
    const [count, setCount] = useState(5);
    return(
        <CounterProvider value= {{count, setCount}}>
            {props.children}
        </CounterProvider>
    )
}