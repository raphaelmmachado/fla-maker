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
  };
  const selectPlayer = (player) => {
    setShowPlayersContainer(false);
    setPlayerState((prev) => {
      return { ...prev, [keyState]: player };
    });
  };
  return (
    <main className="field">
      <div onClick={selectPosition} id="goalkeeper" className="player">
        {playerState["goalkeeper"] && (
          <>
            <img
              className="player-picture"
              src={playerState["goalkeeper"].img}
            />
            <p>{playerState["goalkeeper"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="right-back" className="player">
        {playerState["right-back"] && (
          <>
            <img
              className="player-picture"
              src={playerState["right-back"].img}
            />
            <p>{playerState["right-back"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="defender-right" className="player">
        {playerState["defender-right"] && (
          <>
            <img
              className="player-picture"
              src={playerState["defender-right"].img}
            />
            <p>{playerState["defender-right"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="defender-left" className="player">
        {playerState["defender-left"] && (
          <>
            <img
              className="player-picture"
              src={playerState["defender-left"].img}
            />
            <p>{playerState["defender-left"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="left-back" className="player" index="4">
        {playerState["left-back"] && (
          <>
            <img
              className="player-picture"
              src={playerState["left-back"].img}
            />
            <p>{playerState["left-back"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="midfielder-right" className="player">
        {playerState["midfielder-right"] && (
          <>
            <img
              className="player-picture"
              src={playerState["midfielder-right"].img}
            />
            <p>{playerState["midfielder-right"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="midfielder-left" className="player">
        {playerState["midfielder-left"] && (
          <>
            <img
              className="player-picture"
              src={playerState["midfielder-left"].img}
            />
            <p>{playerState["midfielder-left"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="attacking-midfielder-right"
        className="player"
      >
        {playerState["attacking-midfielder-right"] && (
          <>
            <img
              className="player-picture"
              src={playerState["attacking-midfielder-right"].img}
            />
            <p>{playerState["attacking-midfielder-right"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="attacking-midfielder-left"
        className="player"
      >
        {playerState["attacking-midfielder-left"] && (
          <>
            <img
              className="player-picture"
              src={playerState["attacking-midfielder-left"].img}
            />
            <p>{playerState["attacking-midfielder-left"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="attacker-right" className="player">
        {playerState["attacker-right"] && (
          <>
            <img
              className="player-picture"
              src={playerState["attacker-right"].img}
            />
            <p>{playerState["attacker-right"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="attacker-left" className="player">
        {playerState["attacker-left"] && (
          <>
            <img
              className="player-picture"
              src={playerState["attacker-left"].img}
            />
            <p>{playerState["attacker-left"].name}</p>
          </>
        )}
      </div>

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
    </main>
  );
}
export { Field };
