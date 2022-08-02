import closeSVG from "../assets/close.svg";
function Formation({ selectPosition, selectedPlayers, clearPlayer, styles }) {
  return (
    <>
      <div
        onClick={selectPosition}
        id="first"
        className="player"
        style={styles.first}
      >
        {selectedPlayers["first"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["first"].img}
            />
            <p className="default-cursor">{selectedPlayers["first"].name}</p>
            <img
              value="first"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="second"
        className="player"
        style={styles.second}
      >
        {selectedPlayers["second"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["second"].img}
            />
            <p className="default-cursor">{selectedPlayers["second"].name}</p>
            <img
              value="second"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="third"
        className="player"
        style={styles.third}
      >
        {selectedPlayers["third"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["third"].img}
            />
            <p className="default-cursor">{selectedPlayers["third"].name}</p>
            <img
              value="third"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fourth"
        className="player"
        style={styles.fourth}
      >
        {selectedPlayers["fourth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["fourth"].img}
            />
            <p className="default-cursor">{selectedPlayers["fourth"].name}</p>
            <img
              value="fourth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fifth"
        className="player"
        style={styles.fifth}
      >
        {selectedPlayers["fifth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["fifth"].img}
            />
            <p className="default-cursor">{selectedPlayers["fifth"].name}</p>
            <img
              value="fifth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="sixth"
        className="player"
        style={styles.sixth}
      >
        {selectedPlayers["sixth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["sixth"].img}
            />
            <p className="default-cursor">{selectedPlayers["sixth"].name}</p>
            <img
              value="sixth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="seventh"
        className="player"
        style={styles.seventh}
      >
        {selectedPlayers["seventh"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["seventh"].img}
            />
            <p className="default-cursor">{selectedPlayers["seventh"].name}</p>
            <img
              value="seventh"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eighth"
        className="player"
        style={styles.eighth}
      >
        {selectedPlayers["eighth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["eighth"].img}
            />
            <p className="default-cursor">{selectedPlayers["eighth"].name}</p>
            <img
              value="eighth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="ninth"
        className="player"
        style={styles.ninth}
      >
        {selectedPlayers["ninth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["ninth"].img}
            />
            <p className="default-cursor ">{selectedPlayers["ninth"].name}</p>
            <img
              value="ninth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="tenth"
        className="player"
        style={styles.tenth}
      >
        {selectedPlayers["tenth"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["tenth"].img}
            />
            <p className="default-cursor ">{selectedPlayers["tenth"].name}</p>
            <img
              value="tenth"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eleventh"
        className="player"
        style={styles.eleventh}
      >
        {selectedPlayers["eleventh"] && (
          <div className="player-circle">
            <img
              className="player-picture"
              src={selectedPlayers["eleventh"].img}
            />
            <p className="default-cursor ">{selectedPlayers["eleventh"].name}</p>
            <img
              value="eleventh"
              clear="true"
              className="default-cursor clear"
              src={closeSVG}
              onClick={clearPlayer}
            />
          </div>
        )}
      </div>
    </>
  );
}
export { Formation };
