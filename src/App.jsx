import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import { copyImageToClipboard } from "copy-image-clipboard";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Icons } from "./components/Icons";
import { Formation } from "./components/Formation";
import { Footer } from "./components/Footer";
import {ModalComponent} from "./components/ModalComponent"

function App() {
  // state of selected formation
  const [formation, setFormation] = useState("fourfourtwo");
  const [team, setTeam] = useState("flamengo");
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
        formationState={(formation) => setFormation(formation)}
        teamState={(team) => setTeam(team)}
        takeFieldScreenshot={takeFieldScreenshot}
        screenshot={image}
        copied={copy}
      />
      <div ref={ref}>
        <Formation formation={formation} team={team} />
      </div>
      <Icons />
      <Footer />
      <ModalComponent />
    </div>
  );
}

export default App;
