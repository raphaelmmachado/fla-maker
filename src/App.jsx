import { useState } from "react";
import { Field } from "./components/Field";
import { Options } from "./components/Options";

function App() {
  const [formation,setFormation] = useState("fourfourtwo")
  return (
    <div className="App" id="App">
      <Options formationState={(value)=> setFormation(value)}/>
      <br />
      <br />
      <Field formation={formation}/>
    </div>
  );
}

export default App;
