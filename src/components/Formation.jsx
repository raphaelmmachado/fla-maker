function Formation({ selectPosition, playerState, styles }) {
  return (
    <>
      <div
        onClick={selectPosition}
        id="first"
        position="first"
        className="player"
        style={styles.first}
      >
        {playerState["first"] && (
          <>
            <img className="player-picture" src={playerState["first"].img} />
            <p>{playerState["first"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="second"
        position="second"
        className="player"
        style={styles.second}
      >
        {playerState["second"] && (
          <>
            <img className="player-picture" src={playerState["second"].img} />
            <p>{playerState["second"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="third"
        position="third"
        className="player"
        style={styles.third}
      >
        {playerState["third"] && (
          <>
            <img className="player-picture" src={playerState["third"].img} />
            <p>{playerState["third"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fourth"
        position="fourth"
        className="player"
        style={styles.fourth}
      >
        {playerState["fourth"] && (
          <>
            <img className="player-picture" src={playerState["fourth"].img} />
            <p>{playerState["fourth"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="fifth"
        position="fifth"
        className="player"
        style={styles.fifth}
      >
        {playerState["fifth"] && (
          <>
            <img className="player-picture" src={playerState["fifth"].img} />
            <p>{playerState["fifth"].name}</p>
          </>
        )}
      </div>
      <div
        onClick={selectPosition}
        id="sixth"
        position="sixth"
        className="player"
        style={styles.sixth}
      >
        {playerState["sixth"] && (
          <>
            <img className="player-picture" src={playerState["sixth"].img} />
            <p>{playerState["sixth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="seventh"
        position="seventh"
        className="player"
        style={styles.seventh}
      >
        {playerState["seventh"] && (
          <>
            <img className="player-picture" src={playerState["seventh"].img} />
            <p>{playerState["seventh"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eighth"
        position="eighth"
        className="player"
        style={styles.eighth}
      >
        {playerState["eighth"] && (
          <>
            <img className="player-picture" src={playerState["eighth"].img} />
            <p>{playerState["eighth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="ninth"
        position="ninth"
        className="player"
        style={styles.ninth}
      >
        {playerState["ninth"] && (
          <>
            <img className="player-picture" src={playerState["ninth"].img} />
            <p>{playerState["ninth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="tenth"
        position="tenth"
        className="player"
        style={styles.tenth}
      >
        {playerState["tenth"] && (
          <>
            <img className="player-picture" src={playerState["tenth"].img} />
            <p>{playerState["tenth"].name}</p>
          </>
        )}
      </div>

      <div
        onClick={selectPosition}
        id="eleventh"
        position="eleventh"
        className="player"
        style={styles.eleventh}
      >
        {playerState["eleventh"] && (
          <>
            <img className="player-picture" src={playerState["eleventh"].img} />
            <p>{playerState["eleventh"].name}</p>
          </>
        )}
      </div>
    </>
  );
}
export { Formation };
