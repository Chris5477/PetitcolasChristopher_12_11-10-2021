import Logo from "./Logo";
import Navigation from "./Navigation";
import styled from "styled-components";

const HeaderApp = styled.div`
  width: 100%;
  height: 91px;
  background-color: #020203;
  display : flex;
  justify-content : space-between;
  align-items : center;
`;

const Header = () => {
  return (
    <HeaderApp>
      <Logo />
      <Navigation />
    </HeaderApp>
  );
};

export default Header;
