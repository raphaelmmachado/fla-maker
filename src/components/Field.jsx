import "./4-4-2/fourfourtwo.css";
import {sortedPlayers as players} from "./util/players";
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
      <div
        
        onClick={selectPosition}
        id="first"
        className="player"
      >
        {playerState["first"] && (
          <>
            <img className="player-picture" src={playerState["first"].img} />
            <p>{playerState["first"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="second" className="player">
        {playerState["second"] && (
          <>
            <img className="player-picture" src={playerState["second"].img} />
            <p>{playerState["second"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="third" className="player">
        {playerState["third"] && (
          <>
            <img className="player-picture" src={playerState["third"].img} />
            <p>{playerState["third"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="fourth" className="player">
        {playerState["fourth"] && (
          <>
            <img className="player-picture" src={playerState["fourth"].img} />
            <p>{playerState["fourth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="fifth" className="player">
        {playerState["fifth"] && (
          <>
            <img className="player-picture" src={playerState["fifth"].img} />
            <p>{playerState["fifth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="sixth" className="player">
        {playerState["sixth"] && (
          <>
            <img className="player-picture" src={playerState["sixth"].img} />
            <p>{playerState["sixth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="seventh" className="player">
        {playerState["seventh"] && (
          <>
            <img className="player-picture" src={playerState["seventh"].img} />
            <p>{playerState["seventh"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="eighth" className="player">
        {playerState["eighth"] && (
          <>
            <img className="player-picture" src={playerState["eighth"].img} />
            <p>{playerState["eighth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="ninth" className="player">
        {playerState["ninth"] && (
          <>
            <img className="player-picture" src={playerState["ninth"].img} />
            <p>{playerState["ninth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="tenth" className="player">
        {playerState["tenth"] && (
          <>
            <img className="player-picture" src={playerState["tenth"].img} />
            <p>{playerState["tenth"].name}</p>
          </>
        )}
      </div>
      <div onClick={selectPosition} id="eleventh" className="player">
        {playerState["eleventh"] && (
          <>
            <img className="player-picture" src={playerState["eleventh"].img} />
            <p>{playerState["eleventh"].name}</p>
          </>
        )}
      </div>

      {showPlayersContainer && (
        <div className="players-container">
          <>
          <div className="close-button"onClick={()=> setShowPlayersContainer(false)}></div>
          {players.map((player, index) => {
            return (
              <div
                key={index}
                onClick={() => selectPlayer(player)}
                className="player-box"
              >
                <img className="player-picture" src={player.img} />
                <h3> {player.name}</h3>
                <h5>#{player.num}</h5>
              </div>
            );
          })}
          
          </>
        </div>
      )}
    </main>
  );
}
export { Field };
