//IMPORT ALL DEPENDECIES

import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

//USE STYLE-COMPOENTS FOR CSS
//STYLE OF NAV TAG
const ContainerNav = styled.nav`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 91px;
    background-color: black;
    display: flex;
    align-items: center;
  }
`;

//STYLE OF UL TAG
const ListLink = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-left: 10px;
  padding-right: 87px;
`;
//STYLE COMPONENT FROM REACT , I PUT HIM BETWEEN PARENTHESIS
const Links = styled(Link)`
  @media screen and (min-width: 1024px) {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
`;

//BUILD COMPONENT NAVIGATION
// USE LINK FOR THE NAVIGATION , KEY-WORD TO REDIRECT USER , TO SET THE PATH
const Navigation = () => {
  return (
    <ContainerNav>
      <ListLink>
        <Logo />
        <Links to="/">Acceuil</Links>
        <Links to="/">Profil</Links>
        <Links to="/">Réglage</Links>
        <Links to="/">Communauté</Links>
      </ListLink>
    </ContainerNav>
  );
};

export default Navigation;
