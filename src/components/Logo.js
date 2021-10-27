import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <div className="picture-circle">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <h1 className="name-app">SportSee</h1>
    </div>
  );
};

export default Logo;
