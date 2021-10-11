import Navigation from "../components/Navigation";
import Content from "../components/Content";
import { USER_MAIN_DATA /*USER_ACTIVITY, USER_AVERAGE_SESSIONS*/ } from "../mock/mock_data";
import styled from "styled-components";

const MainPage = styled.div`
width: 100%;
height: 100vh;
`

function Profil() {
  return (
    <MainPage>
      <Navigation />
      <Content info={USER_MAIN_DATA} />
    </MainPage>
  );
}

export default Profil;
