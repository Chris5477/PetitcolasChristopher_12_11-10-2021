import "../styles/header.css";
import Proptypes from "prop-types";

const Header = ({ user }) => {
  const informationUser = user.user.data?.userInfos.firstName

  return (
    <header className="header">
      <h2 className="name-user">
        Bonjour <span>{informationUser}</span>
      </h2>
      <p className="objectif">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

Header.propTypes = {
  user: Proptypes.object.isRequired,
};

export default Header;
