import styled from "styled-components";

const Header = styled.header`
  grid-area: 1/2/2/3;
  place-self: center start;
`;

const NameUser = styled.h2`
  padding-left: 150px;
  font-size: 48px;
  line-height: 24px;
  font-weight: 500;
`;

const ColorName = styled.span`
  color: #f24423;
`;

const Sentence = styled.p`
padding-left: 150px;
font-size: 18px;
line-height:24px;
font-weight:400;
`;
const UserInfo = (props) => {
  return (
    <Header>
      <NameUser>
        Bonjour <ColorName>{props.name.userInfos.firstName}</ColorName>
      </NameUser>
      <Sentence>Félicitation ! Vous avez explosé vos objectifs hier 👏</Sentence>
    </Header>
  );
};

export default UserInfo;
