import logo from "./logo.svg";
import "./App.css";
import { FcSearch } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";

function Card() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="light">Relaible efficient delivery</h2>
        <h2 className="bold">Powered by Technology</h2>
        <p>
          {" "}
          Our Artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="card">
        <div className="left-side">
        <div className="box left">
          <h4>Supervisor</h4>
          <p>monitors activity to identify project roadblocks</p>
          <span>
            <FcSearch />
          </span>
        </div>
        </div>
        <div className="center">
          <div className="box center-top">
            <h4>Team Builder</h4>
            <p>
              scans our talent network to create the optimal team for your
              project
            </p>
            <span>
              <FaHome />
            </span>
          </div>
          <div className="box center-bottom">
            <h4>Karma</h4>
            <p>Reqularly evaluates our talent to ensure quality</p>
            <span>
              <HiOutlineLightBulb />
            </span>
          </div>
        </div>
        <div className="right-side">
        <div className="box right">
          <h4>Calculator</h4>
          <p>
            uses data from past projects to provide better delivery estimates
          </p>
          <span>
            <HiMiniComputerDesktop />
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
