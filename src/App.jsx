import { useState } from "react";
import { FourFourTwo } from "./components/4-4-2/FourFourTwo";
import { Select } from "./components/Select";
function App() {
  const [select, setSelect] = useState(false);
  const [playerID, setPlayerID] = useState("");
  const [playerIndex, setPlayerIndex] = useState(0);
  console.log(playerID)
  const handleSelect = (id) => {
    setSelect(true);
    setPlayerID(id);
  };
  const handlePlayersData = (playerIndex) => {
    setPlayerIndex(playerIndex);
  };
  //TODO --> INDEX DO JOGADOR NÃO PODE SER STATE!!!
  return (
    <div className="App">
      <FourFourTwo
        playerIndex={playerIndex}
        handleSelect={(id) => handleSelect(id)}
      />
      {select && (
        <>
         {playerID}
          <Select
            handlePlayersData={(playerIndex) => handlePlayersData(playerIndex)}
          />
        </>
      )}
    </div>
  );
}

export default App;
