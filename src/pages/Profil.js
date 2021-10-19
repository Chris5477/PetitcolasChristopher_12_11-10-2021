//import of all my dependencies

import Navigation from "../components/Navigation";
import Content from "../components/Content";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../mock/mock_data";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

// USE STYLED-COMPOENTS FOR CSS

//I CREATE A COMPONENT AND I ASSIGN HIM A TAG HTML DIV
const MainPage = styled.div`
  //I CODE CSS
  @media screen and (min-width: 1024) {
    width: 100%;
    height: 100vh;
  }
`;

// I CREATE A SMART COMPONENT , HE WILL TRANSMIT ALL DATAS TO THESES CHILDRENS
const Profil = () => {
  // USE USEEFFECT TO DO REQUEST HTTP WITH AXIOS   ON THE FUTURE , REEDUX HERE
  useEffect(() => {
    //GET ROUTE API RUN FROM SERVEUR , DATE AVAILIBLE ON CONSOLE . IF THERE IS A PROBLE , CATCH EXPLIANS US THE PROBLEM ON THE CONSOLE
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => console.log(res.data.data.userInfos))
      .catch((err) => console.log(`erreur de récupération des infos générales ${err}`));
    axios
      .get("http://localhost:3000/user/12/activity")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`erreur de récupération sur les calories brulées et le poids ${err}`));
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => console.log(res.data.data.todayScore))
      .catch((err) => console.log(`erreur de récupération sur le score de la journée ${err}`));
    axios
      .get("http://localhost:3000/user/12/performance")
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(`erreur de récupération sur les données du radarChart  ${err}`));
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => console.log(res.data.data.keyData))
      .catch((err) => console.log(`erreur de récupération des chiifres clé sur l'alimentation de la journée ${err}`));
  }, []);

  return (
    //BUILD COMPONENT
    // <CONTENT /> SEND PROPS ON THESE DESCENDING
    <MainPage>
      <Navigation />
      <Content userData={USER_MAIN_DATA} activityData={USER_ACTIVITY} performance={USER_PERFORMANCE} average={USER_AVERAGE_SESSIONS} />
    </MainPage>
  );
};

export default Profil;
