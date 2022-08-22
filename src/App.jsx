import { useRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { copyImageToClipboard } from "copy-image-clipboard";

import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Icons } from "./components/Icons";
import { Formation } from "./components/Formation";
import { Footer } from "./components/Footer";

function App() {
// state of selected formation
  const [formation, setFormation] = useState("fourfourtwo");

//  Button to take screenshot of the field
  const ref = useRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [copy, setCopy] = useState(false);

  const takeFieldScreenshot = async () => {
    if (ref)
      try {
        await takeScreenshot(ref.current).then((image) =>
          copyImageToClipboard(image).then(() => setCopy(true))
        );
      } catch (e) {
        alert("Falha ao tirar print do campo. Tente novamente!");
        console.log("Error: ", e.message);
      }
    setTimeout(() => setCopy(false), 3000);
  };

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
        <Formation formation={formation} />
      </div>
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
