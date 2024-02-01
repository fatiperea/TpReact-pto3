import { useState } from "react";

function App() {
  const [msj, setMsj]=useState("from changed state");

  return <Punto3 friend="my friend!"></Punto3>;
}

export default App;
