import { sortedPlayers as players } from "../util/players";
import closeImg from "../assets/goback.svg";
import arrowUp from "../assets/arrow-up.svg"
function Select({ selectPlayer, close }) {
  const goalKeepers = players.filter((player) => player.pos === "G");
  const sideBacks = players.filter((player) => player.pos === "L");
  const defenders = players.filter((player) => player.pos === "D");
  const midfielders = players.filter((player) => player.pos === "M");
  const attackers = players.filter((player) => player.pos === "A");

  return (
    <div className="players-container">
      <div onClick={() => close()} className="close">
        <div><img src={arrowUp} /></div>
        <div className="go-back">VOLTAR</div>
      </div>
      <div className="position-title">GOLEIROS</div>
      {goalKeepers.map((player) => {
        return (
            <div
              key={player.num}
              onClick={() => selectPlayer(player)}
              className="player-box"
            >
              <img className="player-picture" src={player.img} />
              <h3> {player.name}</h3>
              <h5>#{player.num}</h5>
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
            <img className="player-picture" src={player.img} />
            <h3> {player.name}</h3>
            <h5>#{player.num}</h5>
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
            <img className="player-picture" src={player.img} />
            <h3> {player.name}</h3>
            <h5>#{player.num}</h5>
          </div>
        );
      })}
      <div className="position-title">MEIOS-CAMPOS</div>
      {midfielders.map((player) => {
        return (
          <div
            key={player.num}
            onClick={() => selectPlayer(player)}
            className="player-box"
          >
            <img className="player-picture" src={player.img} />
            <h3> {player.name}</h3>
            <h5>#{player.num}</h5>
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
