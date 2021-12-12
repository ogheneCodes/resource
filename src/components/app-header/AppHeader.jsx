import "./AppHeader.css";
import { Drawer } from "antd";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import logo3 from "../../assets/logo3.svg";
import menuIcon from "../../assets/menu.svg";
import { useState } from "react";

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="AppHeader">
        <div className="AppHeader-left">
          <img src={logo} alt="" className="AppHeader-logo" />
          <img src={logo3} alt="" className="AppHeader-logo-sub" />
          <div className="AppHeader-link-wrapper">
            <a href="#" className="AppHeader-link mr10">
              Features
            </a>
            <a href="#" className="AppHeader-link">
              About
            </a>
          </div>
        </div>
        <div className="AppHeader-right">
          <div className="AppHeader-link-wrapper flex-row align-items-center">
            <Link to="/login" className="btn-link mr20 AppHeader-cta">
              Sign up
            </Link>
            <Link to="/login" className="btn-primary AppHeader-cta">
              Sign in
            </Link>
          </div>
          <img
            src={menuIcon}
            alt="menu"
            className="AppHeader-menu"
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <Drawer
        placement="top"
        width={500}
        height="fit-content"
        onClose={() => setVisible(false)}
        visible={visible}
        // extra={
        //   <>
        //     <button>Cancel</button>
        //     <button type="primary">OK</button>
        //   </>
        // }
      >
        <div className="flex-column mb50">
          <a href="#" className="AppHeader-link mb20">
            Features
          </a>
          <a href="#" className="AppHeader-link">
            About
          </a>
        </div>
        <div className="flex-column">
          <a href="#" className="btn-link btn-link-sub AppHeader-cta mb20">
            Sign up
          </a>
          <a href="#" className="btn-primary AppHeader-cta">
            Sign in
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;
