import "./formation.css";
import { Select } from "./Select";
import { Formation } from "./Formation";
import { useEffect, useState } from "react";
import { fourfourtwo, fourthreethree, threefivetwo } from "../util/positions";
function Field({ formation }) {
  const [showPlayersContainer, setShowPlayersContainer] = useState(false);
  const [keyState, setKeyState] = useState("");
  const [playerState, setPlayerState] = useState({});
  console.log(keyState)
  const selectPosition = (e) => {
    const position = e.target.getAttribute("position")
    setShowPlayersContainer(true);
    // quando clicava no mesmo position se transformava em null
    setKeyState(prev=> !position ? prev : position); 
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    setPlayerState((prev) => {
      return { ...prev, [keyState]:player };
    });
  };
  const goBack = (e) => {
    if (e.target.id === "field") setShowPlayersContainer(false);
    return;
  };
  const [checkFormation, setCheckFormation] = useState("");
  useEffect(() => {
    switch (formation) {
      case "fourfourtwo":
        setCheckFormation(fourfourtwo);
        return;
      case "fourthreethree":
        setCheckFormation(fourthreethree);
        return;
      case "threefivetwo":
        setCheckFormation(threefivetwo);
        return;
      default:
        setCheckFormation(fourfourtwo);
        break;
    }
  }, [formation]);
  return (
    <main className="field" id="field" onClick={goBack}>
      <Formation
        selectPosition={selectPosition}
        playerState={playerState}
        styles={checkFormation}
      />

      {showPlayersContainer && (
        <Select selectPlayer={selectPlayer} close={()=> setShowPlayersContainer(false)}/>
      )}
    </main>
  );
}


export { Field };
