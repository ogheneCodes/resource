import circle from "../../assets/circle.svg";
import Dashboard from "./Dashboard.css";

const DashBoard = () => {
  return (
    <div className="Dashboard">
      <div className="Dashboard-inner">
        <div>
          <h1>Hello, Ositadinma Nwangwu</h1>
          <p className="paragraph1">Welcome and good to have you back.</p>
        </div>
        <div>
          <h2 className="heading2">Things to do</h2>
          <div className="notification flex-row align-items-center space-between mb10">
            <div className="flex-row align-items-center">
              <img src={circle} alt="" className="mr10" />
              <span>Upload your employee performance agreement</span>
            </div>
            <a href="">Begin</a>
          </div>
          <div className="notification flex-row align-items-center space-between">
            <div className="flex-row align-items-center">
              <img src={circle} alt="" className="mr10" />
              <span>Start quarterly self review</span>
            </div>
            <a href="">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
