import "../styles/home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Home = () => {
  return (
    <div className="home">
      <div className="container-home">
        <div className="logo-container">
          <div className="logo-home">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title-home">Sportsee</h1>
          <Link className="link-home-page" to={{ pathname: `profil/12` }}>
            Page profil id 12
          </Link>
          <Link className="link-home-page" to={{ pathname: `profil/18` }}>
            Page profil id 18
          </Link>
        </div>
        <div className="information-container">
          <div className="description-container">
            <p>Sportsee est une applcation web vous permettant de visualiser vos seances de sports. Nous récoltons les informations de vos séances
              afin de vous permettre de suivre votre alimentation , votre poids ou encore votre évolution sportive comme la performance. Nous vous proposons de 
              voir toutes ces évolutions facilement via des graphiques.
              N"hesitez pas à rejoindre l'aventure sportsee 
            </p>
            <Link className="signup" to="">Inscription</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
