// IMPORT ALL DEPENDENCIES
import { Link } from "react-router-dom";
import "../styles/error.css"
import logo from "../assets/logo.png"
const Error = () => {
  return (
    <div className="error-page">
      <img src={logo} alt="icon" />
      <h2>Erreur 404</h2>
      <h3>Nous sommes désolés, mais la page que vous demandé n'existe pas</h3>
      <Link to="/">Retourner sur votre page de profil</Link>
    </div>
  );
};

export default Error;
