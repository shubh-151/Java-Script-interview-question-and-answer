import React,{memo} from "react";

const Child = ({counterTwo,func}) => {
  console.log("child component");
  return (
    <div>
      <h3>Child component render</h3>
    </div>
  );
};

export default memo(Child);
