import {useState} from "react"
function PlayerCircle({selectPosition,id,selectedPlayers,closeIcon,clearPlayer,styles}) {
    const [showClearButton,setShowClearButton] = useState(false)
  return (
    <>
      {" "}
      <div
        onClick={selectPosition}
        id={id}
        className="player"
        style={styles}
      >
        {selectedPlayers[id] && (
          <div
            className="player-circle"
            onMouseEnter={() => setShowClearButton(true)}
            onMouseLeave={() => setShowClearButton(false)}
          >
            <img
              className="player-selected"
              src={selectedPlayers[id].img}
            />
            <p className="default-cursor">{selectedPlayers[id].name}</p>
            {showClearButton && (
              <img
                value={id}
                clear="true"
                className="default-cursor clear"
                src={closeIcon}
                onClick={clearPlayer}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export {PlayerCircle}