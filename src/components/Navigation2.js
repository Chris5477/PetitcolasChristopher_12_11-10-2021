import { Link } from "react-router-dom";
import altere from "../assets/altere.png";
import biker from "../assets/biker.png";
import relax from "../assets/relax.png";
import swimmer from "../assets/swimmer.png";

import "../styles/nav-secondary.css";

const Navigation2 = () => {
  return (
    <div className="second-nav">
      <ul className="list-link-navtwo">
        <Link className="btn-navtwo" to="/profil/:id">
          <img src={relax} alt="logo" />
        </Link>
        <Link className="btn-navtwo" to="/profil/:id">
          <img src={swimmer} alt="logo" />
        </Link>
        <Link className="btn-navtwo" to="/profil/:id">
          <img src={biker} alt="logo" />
        </Link>
        <Link className="btn-navtwo" to="/profil/:id">
          <img src={altere} alt="logo" />
        </Link>
      </ul>
      <footer>Copyright, SportSee 2020</footer>
    </div>
  );
};

export default Navigation2;
