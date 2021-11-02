//IMPORT ALL DEPENDECIES
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "../styles/nav-primary.css";

const Navigation = () => {
  return (
    <nav className="nav-primary">
      <Logo />
      <ul className="list-link">
        <Link className="link-nav-primary" to="/">
          Acceuil
        </Link>
        <Link className="link-nav-primary" to="/">
          Profil
        </Link>
        <Link className="link-nav-primary" to="/">
          Réglage
        </Link>
        <Link className="link-nav-primary" to="/">
          Communauté
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
