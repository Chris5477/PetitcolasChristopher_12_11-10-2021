import "../styles/header.css";
import Proptypes from "prop-types"

const Header = ({ user }) => {

  const data = user.user.data != null ? user.user.data.userInfos.firstName : null
  

  return (
    <header className="header">
    <h2 className="name-user">
      Bonjour <span>{data}</span>
    </h2>
    <p className="objectif">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  </header>
     
    
  );
};

Header.propTypes={
  user: Proptypes.object.isRequired
}

export default Header;
