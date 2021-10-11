import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding-right: 80px;
`;

const Links = styled(Link)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;

const Navigation = () => {
  return (
    <ContainerNav>
      <Links to="/">Acceui</Links>
      <Links to="/id">Profil</Links>
      <Links to="/settings">Réglage</Links>
      <Links to="/community">Communauté</Links>
    </ContainerNav>
  );
};

export default Navigation;
