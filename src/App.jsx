import { Field } from "./components/Field";
import { Options } from "./components/Options";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { copyImageToClipboard } from "copy-image-clipboard";

function App() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [copy,setCopy] = useState()

  const takeFieldScreenshot = () => {
    takeScreenshot(ref.current);
    copyImageToClipboard(image)
      .then(() => {
        console.log("Image Copied");
        setCopy(true)
      })
      .catch((e) => {
        alert("Erro ao copiar imagem")
        console.log("Error: ", e.message);
      });
      setTimeout(()=>setCopy(false), 3000)
  };
  /*acima é novo */
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
      <Footer />
    </div>
  );
}

export default App;
