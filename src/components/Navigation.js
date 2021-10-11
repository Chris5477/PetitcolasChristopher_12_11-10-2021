import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #020203;
`;

const Links = styled(Link)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  padding-right: 80px;
`;

const Navigation = () => {
  return (
    <ContainerNav>
      <Logo />
      <Links to="/">Acceuil</Links>
      <Links to="/id">Profil</Links>
      <Links to="/settings">Réglage</Links>
      <Links to="/community">Communauté</Links>
    </ContainerNav>
  );
};

export default Navigation;
