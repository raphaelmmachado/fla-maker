import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
function Icons() {
  return (
    <div className="icons">
      <TwitterShareButton
        children={<TwitterIcon size={22} round={true} />}
        url="https://flamaker.netlify.app/"
        title="Monte sua escalação do Flamengo"
        hashtags={["flamengo", "flamaker"]}
      />
      <FacebookShareButton
        url="https://flamaker.netlify.app/"
        children={<FacebookIcon size={22} round={true} />}
        quote="Monte sua escalação do Flamengo!"
      />
      <WhatsappShareButton
        url="https://flamaker.netlify.app/"
        children={<WhatsappIcon size={22} round={true} />}
        title="Monte sua escalação do Flamengo!"
        separator=" "
      />
      <TelegramShareButton
        url="https://flamaker.netlify.app/"
        children={<TelegramIcon size={22} round={true} />}
        title="Monte sua escalção do Flamengo!"
      />
    </div>
  );
}
export {Icons}
