import "../styles/header.css";

const Header = ({ user }) => {
  // const data = user.user.data.userInfos.firstName
  const data = null;

  return (
    <header className="header">
      <h2 className="name-user">
        Bonjour <span>{data}</span>
      </h2>
      <p className="objectif">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Header;
