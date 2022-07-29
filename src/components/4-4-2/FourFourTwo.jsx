import players from "../util/players";
import "./fourfourtwo.css";
function FourFourTwo({ handleSelect, playerIndex }) {
  
  const selectPlayer = (e) => {
    handleSelect(e.currentTarget.id);
  };
  return (
    <div className="field">
      <div onClick={selectPlayer} id="goalkeeper" className="player">
        {<img src={players[playerIndex].img} />}
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="right-back" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="defender-right" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="defender-left" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="left-back" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="midfielder-right" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="midfielder-left" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div
        onClick={selectPlayer}
        id="attacking-midfielder-right"
        className="player"
      >
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div
        onClick={selectPlayer}
        id="attacking-midfielder-left"
        className="player"
      >
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="attacker-right" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
      <div onClick={selectPlayer} id="attacker-left" className="player">
        <img src={players[playerIndex].img} />
        <p>{players[playerIndex].name}</p>
      </div>
    </div>
  );
}
export { FourFourTwo };
