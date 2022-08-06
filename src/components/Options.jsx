import { RiScreenshot2Line } from "react-icons/ri";
function Options({ formationState, takeFieldScreenshot, copied }) {
  return (
    <div className="select-formation">
      <select
        onChange={(e) => formationState(e.target.value)}
        name="formation"
        id="formation"
      >
        <option value="fourfourtwo">4-4-2A</option>
        <option value="fourfourtwolosangle">4-4-2B</option>
        <option value="fourthreethree">4-3-3A</option>
        <option value="fourthreethreeb">4-3-3B</option>
        <option value="threefivetwo">3-5-2</option>
      </select>
      {copied && <div id="copied-text">Imagem do campo copiada!</div>}

      <RiScreenshot2Line size={30} onClick={takeFieldScreenshot} className="take-screenshot" color={copied ? "green" : "black"}/>
    </div>
  );
}
export { Options };
