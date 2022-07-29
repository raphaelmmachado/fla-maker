import players from "./util/players";
function Select({ showContainerState}) {
  return (
    <div className="players-container">
      {players.map((player) => {
        return (
          <div onClick={()=> showContainerState()}className="player-box">
            <img className="player-picture" src={player.img} />
            <h1> {player.name}</h1>
            <h5>#{player.num}</h5>
          </div>
        );
      })}
    </div>
  );
}
export { Select };
