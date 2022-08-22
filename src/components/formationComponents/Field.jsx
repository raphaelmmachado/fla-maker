
import closeSVG from "../../assets/icons/close.svg";
import { PlayerCircle } from "./PlayerCircle";
function Field({ selectPosition, selectedPlayers, clearPlayer, styles }) {
  return (
    <>
      <PlayerCircle id={"first"}styles={styles.first}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG} clearPlayer={clearPlayer}/>
      <PlayerCircle id={"second"}styles={styles.second}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"third"}styles={styles.third}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"fourth"}styles={styles.fourth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG} clearPlayer={clearPlayer}/>
      <PlayerCircle id={"fifth"}styles={styles.fifth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"sixth"}styles={styles.sixth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}  closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"seventh"}styles={styles.seventh}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"eighth"}styles={styles.eighth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG}  clearPlayer={clearPlayer}/>
      <PlayerCircle id={"ninth"}styles={styles.ninth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG} clearPlayer={clearPlayer}/>
      <PlayerCircle id={"tenth"}styles={styles.tenth}selectPosition={selectPosition} selectedPlayers={selectedPlayers}   closeIcon={closeSVG} clearPlayer={clearPlayer}/>
      <PlayerCircle id={"eleventh"}styles={styles.eleventh}selectPosition={selectPosition} selectedPlayers={selectedPlayers}  c closeIcon={closeSVG} clearPlayer={clearPlayer}/>
    </>
  );
}
export { Field };
