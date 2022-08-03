import { useState } from "react";
import { Field } from "./components/Field";
import { Options } from "./components/Options";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  const [formation, setFormation] = useState("fourfourtwo");
  return (
    <div className="App" id="App">
      <Header />
      <Options formationState={(value) => setFormation(value)} />
      <Field formation={formation} />
      <Footer />
    </div>
  );
}

export default App;
