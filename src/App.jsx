import { Header } from "./components/Header";
import { Options } from "./components/Options";
import {Icons} from "./components/Icons"
import { Field } from "./components/Field";
import { Footer } from "./components/Footer";

import { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { copyImageToClipboard } from "copy-image-clipboard";

function App() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [copy, setCopy] = useState();

  const takeFieldScreenshot = () => {
    takeScreenshot(ref.current);
    if (!image) return;
    copyImageToClipboard(image)
      .then(() => {
        setCopy(true);
      })
      .catch((e) => {
        alert("Falha ao tirar print do campo. Tente novamente!");
        console.log("Error: ", e.message);
      });
    setTimeout(() => setCopy(false), 3000);
  };

  const [formation, setFormation] = useState("fourfourtwo");
  return (
    <div className="App" id="App">
      <Header />
      <Options
        formationState={(value) => setFormation(value)}
        takeFieldScreenshot={takeFieldScreenshot}
        screenshot={image}
        copied={copy}
      />
      <div ref={ref}>
        <Field formation={formation} />
      </div>
      <Icons/>
      <Footer />
    </div>
  );
}

export default App;
