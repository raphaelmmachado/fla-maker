import {sortedPlayers as players} from "./util/players";
function Select({selectPlayer}) {
  return (
    <div className="players-container">
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
