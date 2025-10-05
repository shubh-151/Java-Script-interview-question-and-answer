import "./App.css";
import Parent from "./callback/Parent.jsx";
import MemoHook from "./component/MemoHook.jsx";
import RefHook from "./component/RefHook.jsx";
import StateHook from "./component/StateHook.jsx";
import UsereducerHook from "./component/UsereducerHook.jsx";
import Counter from "./component/Counter.jsx";
import { useContext } from "react";
import { CounterContext, CounterProvider } from "./Context/Counter.jsx";

function App() {
  const counterstate = useContext(CounterContext)





  return (
    <div className="App">
      <h1>
        (:-<u>All hooks in one frame</u>-:)
      </h1>
      <hr></hr>
      <StateHook />
      <hr></hr>
      <MemoHook />
      <hr></hr>
      <Parent />
      <hr></hr>
      <RefHook />
      <hr></hr>
      <UsereducerHook />
      <hr></hr>
      <CounterProvider>
        <h1>ContextApi hooks</h1>
        <h3>Count is {counterstate.count}</h3>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
