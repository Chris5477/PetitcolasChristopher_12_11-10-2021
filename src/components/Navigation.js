import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.nav`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 91px;
    background-color: black;
    display: flex;
    align-items: center;
  }
`;

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

const Links = styled(Link)`
  @media screen and (min-width: 1024px) {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
`;

const Navigation = () => {
  return (
    <ContainerNav>
      <ListLink>
        <Logo />
        <Links to="/">Acceuil</Links>
        <Links to="/id">Profil</Links>
        <Links to="/settings">Réglage</Links>
        <Links to="/community">Communauté</Links>
      </ListLink>
    </ContainerNav>
  );
};

export default Navigation;
