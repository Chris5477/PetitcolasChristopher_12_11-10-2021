import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const NameApp = styled.h1`
margin: 0;
color: #E60000;
margin-left: 10px;
`;

const ContainerLogo = styled.div`
background-color: #E60000;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
padding: 5px;
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
