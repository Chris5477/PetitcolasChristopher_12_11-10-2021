import { NavLink } from "react-router-dom";
import "../styles/logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <NavLink exact to="/">
        <div className="picture-circle">
          <img src="assets/logo.png" alt="logo" />
        </div>
      </NavLink>

      <h1 className="name-app">SportSee</h1>
    </div>
  );
};

export default Logo;
