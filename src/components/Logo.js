import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivLogo = styled.div`
  display: flex;
  padding-left: 25px;
`;

const NameApp = styled.h1`
  color: #e60000;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 500;
`;

const ContainerLogo = styled.div`
width : 57.2px;
height 57.2px;
border-radius: 50%;
background-color : #E60000;
display : flex;
justify-content; center;
align-items: center;
`;

const Logo = () => {
  return (
    <DivLogo>
      <NavLink exact to="/">
        <ContainerLogo>
          <img src="assets/logo.png" alt="logo" />
        </ContainerLogo>
      </NavLink>

      <NameApp>SportSee</NameApp>
    </DivLogo>
  );
};

export default Logo;
