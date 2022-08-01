import { sortedPlayers as players } from "../util/players";
import closeImg from "../assets/goback.svg";

function Select({ selectPlayer, close }) {
  const goalKeepers = players.filter((player) => player.pos === "G");
  const sideBacks = players.filter((player) => player.pos === "L");
  const defenders = players.filter((player) => player.pos === "D");
  const midfielders = players.filter((player) => player.pos === "M");
  const attackers = players.filter((player) => player.pos === "A");

  return (
    <div className="players-container">
      <div onClick={() => close()} className="close">
        <img src={closeImg} />
      </div>
      <div>GOLEIROS</div>
      {goalKeepers.map((player, index) => {
        return (
          <>
            <div
              key={index}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="player-picture" src={player.img} />
              <h3> {player.name}</h3>
              <h5>#{player.num}</h5>
            </div>
          </>
        );
      })}
      <div>ZAGUEIROS</div>
      {defenders.map((player, index) => {
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
      <div>LATERAIS</div>
      {sideBacks.map((player, index) => {
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
      <div>MEIOS-CAMPOS</div>
      {midfielders.map((player, index) => {
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
      <div>ATACANTES</div>
      {attackers.map((player, index) => {
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
    </div>
  );
}
export { Select };
