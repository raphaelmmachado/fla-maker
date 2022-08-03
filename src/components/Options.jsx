import { TwitterShareButton, TwitterIcon } from "react-share";
function Options({formationState}) {
  return (
    <div className="select-formation">
      <select onChange={(e)=> formationState(e.target.value)} name="formation" id="formation">
        <option value="fourfourtwo">4-4-2</option>
        <option value="fourthreethree">4-3-3</option>
        <option value="threefivetwo">3-5-2</option>
      </select>
      <TwitterShareButton
        url="https://flamaker.netlify.app/"
        title="Monte sua escalação do Flamengo"
        hashtags={["flamengo"]}
      >
        <TwitterIcon size={20} round={true} />
      </TwitterShareButton>
    </div>
  );
}
export { Options };
