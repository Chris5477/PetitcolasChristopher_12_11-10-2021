import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container-home">
        <div className="first-half">
          <div className="logo-home">
            <img src="assets/logo.png" alt="logo" />
          </div>
          <h1 className="title-home">Sportsee</h1>
        </div>
        <div className="second-half">
          <Link className="link-home" to={{ pathname: `profil/12` }}>
            Page profil id 12
          </Link>
          <Link className="link-home" to={{ pathname: `profil/18` }}>
            Page profil id 18
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
