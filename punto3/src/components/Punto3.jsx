import { useState } from "react";

const Punto3 = (props) => {
  const [msj, setMsj] = useState(" ");
  
  return (
    <h1>
      Hello {props.friend} {msj}<br />
      <button onClick={()=>{setMsj(msj+"(from changed state)")}}>Click me</button>
    </h1>
  );
};

export default Punto3;
