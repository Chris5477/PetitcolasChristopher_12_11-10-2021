import "../styles/header.css"
import { useEffect } from "react";
import { connect } from "react-redux";
import { apiCallUser } from "../redux/dataUser/actionDataUser";

//BUILD COMPONENT HEADER THAT RETRIEVES PROPS 

const Header = ({user, getData}) => {
  const name = user.user.data.userInfos.firstName
  
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <header className="header">
      <h2 className="name-user">
        Bonjour <span>{name}</span>
      </h2>
      <p className="objectif">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

const mapStateToProps = (state) => {
  return{
    user : state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getData : () => dispatch(apiCallUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);