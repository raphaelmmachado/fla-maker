import { players as playerModule } from "../../util/players.ts";
import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
function Select({ selectPlayer, close, team }) {
  const players = playerModule[team].sort((a, b) => a.num - b.num);
  const goalKeepers = players.filter((player) => player.pos === "G");
  const sideBacks = players.filter((player) => player.pos === "L");
  const defenders = players.filter((player) => player.pos === "D");
  const defMidFielders = players.filter((player) => player.pos === "V");
  const midfielders = players.filter((player) => player.pos === "M");
  const wingers = players.filter((player) => player.pos === "P");
  const attackers = players.filter((player) => player.pos === "A");
  const closeSelector = (e) => e.currentTarget.id !== "player-list" && close();

  // useEffect(() => {
  //   document.body.addEventListener("click", closeSelector);
  //   return () => document.body.removeEventListener("click", closeSelector);
  // }, []);

  return (
    <section id="player-list" className="players-container">
      <div onClick={() => close()} className="close">
        <AiFillCloseCircle size={20} color="white" />
      </div>
      <div id="players-selector" className="players-selector">
        <div className="position-title">GOLEIROS</div>
        {goalKeepers.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <div className="player-name">
                <h4>{player.name}</h4>
              </div>
            </div>
          );
        })}
        <div className="position-title">ZAGUEIROS</div>
        {defenders.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
        <div className="position-title">LATERAIS</div>
        {sideBacks.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
        <div className="position-title">MEIOS-CENTRAIS</div>
        {defMidFielders.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
        <div className="position-title">MEIOS-ATACANTES</div>
        {midfielders.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
        <div className="position-title">PONTAS</div>
        {wingers.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
        <div className="position-title">ATACANTES</div>
        {attackers.map((player) => {
          return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="select-player-photo" src={player.img} />
              <h4 className="player-name"> {player.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export { Select };
