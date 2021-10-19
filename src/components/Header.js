//IMPORT DEPENDENCY STYLED-COMPONENTS
import styled from "styled-components";

//STYLE HEADER TAG
const StyleHeader = styled.header`
  @media screen and (min-width: 1024px) {
    height: 200px;
    margin-left: 80px;
    margin-top: 30px;
  }
`;

//STYLE H2 TAG
const NameUser = styled.h2`
  @media screen and (min-width: 1024px) {
    font-family: "Roboto";
    font-size: 48px;
    font-weight: 500;
    line-height: 24px;
  }
`;

//STYLE SPAN TAG
const ColorName = styled.span`
  color: #e60000;
`;

//STYLE P TAG
const Sentence = styled.p`
  @media screen and (min-width: 1024px) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
  }
`;

//BUILD COMPONENT HEADER THAT RETRIEVES PROPS 
//COLORNAME WRITE NAME USER ON THE NAVIGATOR 
const Header = (props) => {
  return (
    <StyleHeader>
      <NameUser>
        Bonjour <ColorName>{props.name.userInfos.firstName}</ColorName>
      </NameUser>
      <Sentence>Félicitation ! Vous avez explosé vos objectifs hier 👏</Sentence>
    </StyleHeader>
  );
};

export default Header;
