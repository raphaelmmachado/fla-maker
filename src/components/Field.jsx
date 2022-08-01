import "./formation.css";
import { Select } from "./Select";
import { Formation } from "./Formation";
import { useEffect, useState } from "react";
import { fourfourtwo, fourthreethree, threefivetwo } from "../util/positions";
function Field({ formation }) {
  const [showPlayersContainer, setShowPlayersContainer] = useState(false);
  const [keyState, setKeyState] = useState("");
  const [playerState, setPlayerState] = useState({});
  // document.body.addEventListener("click", setShowPlayersContainer(false))
  const selectPosition = (e) => {
    setShowPlayersContainer(true);
    setKeyState(e.target.id);
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    setPlayerState((prev) => {
      return { ...prev, [keyState]: player };
    });
  };
  const handleClick = (e) => {
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
    <main className="field" id="field" onClick={handleClick}>
      <Formation
        selectPosition={selectPosition}
        playerState={playerState}
        styles={checkFormation}
      />

      {showPlayersContainer && (
        <Select selectPlayer={(player) => selectPlayer(player)} close={()=> setShowPlayersContainer(false)}/>
      )}
    </main>
  );
}


export { Field };
