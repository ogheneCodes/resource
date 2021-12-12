import "./AppFooter.css";
import logo2 from "../../assets/logo2.png";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedIn.svg";
import facebook from "../../assets/facebook.svg";

const AppFooter = () => {
  const icons = [facebook, twitter, linkedIn, instagram];
  return (
    <footer className="AppFooter">
      <div className="flex-row align-items-center space-between">
        <div className="flex-column AppFooter-left">
          <img src={logo2} alt="logo" className="AppFooter-logo" />
          <p className="AppFooter-text1">Throw paperwork into the trash.</p>
        </div>
        <div className="flex-column AppFooter-right">
          <div>
            {icons.map((icon) => (
              <img src={icon} alt="ocn" className="AppFooter-icon" />
            ))}
          </div>
          <p className="AppFooter-text2">
            Copyright © Genesys DevStudio . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
