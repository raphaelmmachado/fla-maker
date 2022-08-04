import { TwitterShareButton, TwitterIcon } from "react-share";
import { RiScreenshot2Line } from "react-icons/ri";
function Options({ formationState, takeFieldScreenshot, copied }) {
  return (
    <div className="select-formation">
      <select
        onChange={(e) => formationState(e.target.value)}
        name="formation"
        id="formation"
      >
        <option value="fourfourtwo">4-4-2</option>
        <option value="fourthreethree">4-3-3</option>
        <option value="threefivetwo">3-5-2</option>
      </select>
      {copied && (
        <div id="copied-text">Imagem copiada! (use Ctrl+V)</div>
      )}
      <div className="icons">
        <RiScreenshot2Line size={20} onClick={takeFieldScreenshot} />
        <TwitterShareButton
          url="https://flamaker.netlify.app/"
          title="Monte sua escalação do Flamengo"
          hashtags={["flamengo", "flamaker"]}
        >
          <TwitterIcon size={20} round={true} />
        </TwitterShareButton>{" "}
      </div>
    </div>
  );
}
export { Options };
