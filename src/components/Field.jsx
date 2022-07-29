import "./4-4-2/fourfourtwo.css";
import players from "./util/players";
import { useState } from "react";
function Field({}) {
  const [showPlayersContainer, setShowPlayersContainer] = useState(false);
  const [keyState, setKeyState] = useState("");
  const [playerState, setPlayerState] = useState({});

  const selectPosition = (e) => {
    setShowPlayersContainer(true);
    setKeyState(e.target.id);
    // setIndexState(Number(e.currentTarget.getAttribute("index")));
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    const playerToAdd = {};
    playerToAdd[keyState] = player;
    setPlayerState(playerToAdd);
    console.log(playerState)
  };
  return (
    <div className="field">
      <div
        onClick={selectPosition}
        id="goalkeeper"
        index="0"
        className="player"
      >
      {playerState[keyState] &&
          <>
            {" "}
            <img className="player-picture"src={playerState[keyState].img} />
            <p>{playerState[keyState].name}</p>
          </>}
        
      </div>
      <div
        onClick={selectPosition}
        index="1"
        id="right-back"
        className="player"
      ></div>
      <div
        onClick={selectPosition}
        index="2"
        id="defender-right"
        className="player"
      ></div>
      <div
        onClick={selectPosition}
        id="defender-left"
        index="3"
        className="player"
      ></div>
      <div
        onClick={selectPosition}
        id="left-back"
        className="player"
        index="4"
      ></div>
      <div
        onClick={selectPosition}
        id="midfielder-right"
        className="player"
        index="5"
      ></div>
      <div
        onClick={selectPosition}
        id="midfielder-left"
        className="player"
        index="6"
      ></div>
      <div
        onClick={selectPosition}
        id="attacking-midfielder-right"
        className="player"
        index="7"
      ></div>
      <div
        onClick={selectPosition}
        id="attacking-midfielder-left"
        className="player"
        index="8"
      ></div>
      <div
        onClick={selectPosition}
        id="attacker-right"
        className="player"
        index="9"
      ></div>
      <div
        onClick={selectPosition}
        id="attacker-left"
        className="player"
        index="10"
      ></div>
      {showPlayersContainer && (
        <div className="players-container">
          {players.map((player, index) => {
            return (
              <div
                key={index}
                onClick={() => selectPlayer(player)}
                className="player-box"
              >
                <img className="player-picture" src={player.img} />
                <h1> {player.name}</h1>
                <h5>#{player.num}</h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export { Field };
