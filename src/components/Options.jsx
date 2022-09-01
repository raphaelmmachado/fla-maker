import { RiScreenshot2Line } from "react-icons/ri";
import ReactTooltip from "react-tooltip";

function Options({ formationState, teamState, takeFieldScreenshot, copied }) {
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
      <select onChange={(e) => teamState(e.target.value)} name="team" id="team">
        <option value="flamengo">Flamengo</option>
        <option value="selecao">Seleção Brasileira</option>
      </select>
      <div data-tip="print" data-for="tooltip">
        <RiScreenshot2Line
          size={30}
          onClick={takeFieldScreenshot}
          className="take-screenshot"
          color={copied ? "green" : "black"}
        />
      </div>
      <ReactTooltip
        id="tooltip"
        type="info"
        place="right"
        effect="solid"
        delayHide={500}
        delayShow={200}
        delayUpdate={500}
      />
    </div>
  );
}
export { Options };
