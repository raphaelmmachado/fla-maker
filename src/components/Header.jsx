import { useEffect, useState } from "react";
import { VscFoldDown } from "react-icons/vsc";

function Header() {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", checkScreen);
  }, [mobileScreen]);

  const checkScreen = () =>
    window.innerWidth < 650 ? setMobileScreen(true) : setMobileScreen(false);

  return (
    <div className="header">
      <div>
        <h1 id="title">
          <span className="red-text">FLA</span>MAKER
        </h1>
        <p className="description">escale seu time favorito do Flamengo</p>{" "}
      </div>
      {mobileScreen ? (
        <div className="arrow-down">
          <VscFoldDown />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export { Header };
