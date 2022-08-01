function Formation({ selectPosition, selectedPlayers, styles }) {
  return (
    <>
      <div
        onClick={selectPosition}
        id="first"
        className="player"
        style={styles.first}
      >
        {selectedPlayers["first"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["first"].img}
            />
            <p>{selectedPlayers["first"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="second"
        className="player"
        style={styles.second}
      >
        {selectedPlayers["second"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["second"].img}
            />
            <p>{selectedPlayers["second"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="third"
        className="player"
        style={styles.third}
      >
        {selectedPlayers["third"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["third"].img}
            />
            <p>{selectedPlayers["third"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fourth"
        className="player"
        style={styles.fourth}
      >
        {selectedPlayers["fourth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["fourth"].img}
            />
            <p>{selectedPlayers["fourth"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fifth"
        className="player"
        style={styles.fifth}
      >
        {selectedPlayers["fifth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["fifth"].img}
            />
            <p>{selectedPlayers["fifth"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="sixth"
        className="player"
        style={styles.sixth}
      >
        {selectedPlayers["sixth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["sixth"].img}
            />
            <p>{selectedPlayers["sixth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="seventh"
        className="player"
        style={styles.seventh}
      >
        {selectedPlayers["seventh"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["seventh"].img}
            />
            <p>{selectedPlayers["seventh"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eighth"
        className="player"
        style={styles.eighth}
      >
        {selectedPlayers["eighth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["eighth"].img}
            />
            <p>{selectedPlayers["eighth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="ninth"
        className="player"
        style={styles.ninth}
      >
        {selectedPlayers["ninth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["ninth"].img}
            />
            <p>{selectedPlayers["ninth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="tenth"
        className="player"
        style={styles.tenth}
      >
        {selectedPlayers["tenth"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["tenth"].img}
            />
            <p>{selectedPlayers["tenth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eleventh"
        className="player"
        style={styles.eleventh}
      >
        {selectedPlayers["eleventh"] && (
          <>
            <img
              className="player-picture"
              src={selectedPlayers["eleventh"].img}
            />
            <p>{selectedPlayers["eleventh"].name}</p>
          </>
        )}
      </div>
    </>
  );
}
export { Formation };
