//IMPORT ALL DEPENDECIES
import { Link } from "react-router-dom";
import "../styles/nav-secondary.css";

//BUILD COMPONENT NAVIGATION2
const Navigation2 = () => {
  return (
    <div className="second-nav">
      <ul className="list-link-navtwo">
      <Link className="btn-navtwo" to="/">
        <img src="../assets/relax.png" alt="logo" />
      </Link>
      <Link className="btn-navtwo" to="/">
        <img src="../assets/swimmer.png" alt="logo" />
      </Link>
      <Link className="btn-navtwo" to="/">
        <img src="../assets/biker.png" alt="logo" />
      </Link>
      <Link className="btn-navtwo" to="/">
        <img src="../assets/altere.png" alt="logo" />
      </Link>
      </ul>
      <footer>Copyright, SportSee 2020</footer>
    </div>
  );
};

export default Navigation2;
