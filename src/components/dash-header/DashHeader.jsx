import menu2 from "../../assets/menu2.svg";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";
import employee from "../../assets/employee.svg";
import talent from "../../assets/talent.svg";
import check from "../../assets/check.svg";

import "./DashHeader.css";
import { useState } from "react";

const DashHeader = () => {
  const [show, setShow] = useState(false);

  const displayAvatar = show === true ? "block" : "none";
  return (
    <div className="DashHeader">
      <div className="Dropdown" style={{ display: `${displayAvatar}` }}>
        <div className="Dropdown-wrapper">
          <p className="paragraph3">OSITADINMA NWANGWU</p>
          <p className="Dropdown-text">Profile</p>
          <div>
            <p className="paragraph3">Use Resource Edge as</p>
            <div className="mb10">
              <div className="flex-row space-between">
                <div>
                  <img src={talent} alt="" className="mr10" />
                  <span className="Dropdown-text">Talent Manager</span>
                </div>
                <img src={check} alt="" />
              </div>
            </div>
            <div className="">
              <div>
                <img src={employee} alt="" className="mr10" />
                <span className="Dropdown-text">Talent Manager</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ padding: "1rem 2rem" }}>
          <a href="" className="AppHeader-link">
            Logout
          </a>
        </div>
      </div>
      <div className="DashHeader-left">
        <img src={menu2} alt="" />
        <img src={logo} alt="" className="DashHeader-logo" />
        <span className="DashHeader-tm">TM Dashboard</span>
      </div>
      <div className="DahHeader-right">
        <img
          src={avatar}
          alt=""
          className="DashHeader-avatar"
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};

export default DashHeader;
