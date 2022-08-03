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
    if (e.target.getAttribute("clear") === "true") return
    const circleID = e.currentTarget.id;
    setShowPlayersContainer(true);
    setClickedCircle(circleID);
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    const playerAlreadySelected = Object.values(selectedPlayers).includes(player)
    if (playerAlreadySelected) return
    setSelectedPlayers((prevSelected) => {
      return { ...prevSelected, [clickedCircle]: player };
    });
  };
  const clearPlayer = async (e)=> {
    const circleID = e.target.getAttribute("value")
    setClickedCircle(circleID)
    if (circleID !== clickedCircle) return
    setSelectedPlayers((prevSelected)=> {
      return {...prevSelected, [clickedCircle]:null}
    })
  }
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
        clearPlayer={clearPlayer}
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
