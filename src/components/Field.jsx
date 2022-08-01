import "./formation.css";
import { Select } from "./Select";
import { Formation } from "./Formation";
import { useEffect, useState } from "react";
import { fourfourtwo, fourthreethree, threefivetwo } from "../util/positions";
function Field({ formation }) {
  const [showPlayersContainer, setShowPlayersContainer] = useState(false);
  const [clickedCircle, setClickedCircle] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState({});
  const [checkFormation, setCheckFormation] = useState("");

  const selectPosition = (e) => {
    const circleID = e.currentTarget.id;
    setShowPlayersContainer(true);
    setClickedCircle(circleID);
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    const valueExists = Object.values(selectedPlayers).includes(player)
    if (valueExists) return
    setSelectedPlayers((prevSelected) => {
      return { ...prevSelected, [clickedCircle]: player };
    });
  };
  const goBack = (e) => {
    if (e.target.id === "field") setShowPlayersContainer(false);
    return;
  };

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
        selectedPlayers={selectedPlayers}
        styles={checkFormation}
      />

      {showPlayersContainer && (
        <Select
          selectPlayer={selectPlayer}
          close={() => setShowPlayersContainer(false)}
        />
      )}
    </main>
  );
}

export { Field };
