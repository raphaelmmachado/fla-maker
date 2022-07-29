import players from "./util/players";
function Select({ handlePlayersData }) {
  return (
    <>
      <select onChange={(e) => {
          handlePlayersData(e.target.value);
        }}
      >
        {players.map((player, index) => (
          <option key={player.num} value={index}>{player.name}</option>
        ))}
      </select>
    </>
  );
}
export { Select };
