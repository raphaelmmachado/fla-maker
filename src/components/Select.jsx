import { sortedPlayers as players } from "../util/players";
import closeImg from "../assets/goback.svg";

function Select({ selectPlayer, close }) {
  return (
    <div className="players-container">
      <div onClick={() => close()} className="close"> 
        <img src={closeImg} />
      </div>
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
    </div>
  );
}
export { Select };
