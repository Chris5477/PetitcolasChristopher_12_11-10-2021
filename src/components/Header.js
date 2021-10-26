import "../styles/header.css"

//BUILD COMPONENT HEADER THAT RETRIEVES PROPS 

const Header = ({userData}) => {
  console.log(userData[0])
  return (
    <header className="header">
      <h2 className="name-user">
        Bonjour <span>{userData[0].userInfos.firstName}</span>
      </h2>
      <p className="objectif">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Header;
