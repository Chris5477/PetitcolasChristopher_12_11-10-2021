//IMPORT ALL DEPENDENCIES

import Header from "./Header";
import styled from "styled-components";
import VerticalBar from "../components/VerticalBar";
import ContainerGraphs from "./ContainerGraphs";
import AllCards from "./AllCard";
import GraphBarChart from "./GraphBarChart";



// USE STYLED-COMPONENT FOR CSS
//STYLE FOR DIV TAG
const StyleMaincontainer = styled.div`
@media screen and (min-width: 1024px){
  width: 100%;
  display: grid;
  grid-template-columns: 95px 3fr 1fr;
  grid-template-rows: 200px 274px 275px;

}
`;

//BUILD COMPONENT CONTENT, HE RETRIEVES DATAS SENT BY THIS PARENT
// EACH COMPOnENT SEND PROPS ON THESE CHILDREN
const Content = (props) => {

  return (
    <StyleMaincontainer>
      <VerticalBar />
      <Header name={props.userData[0]} />
      <GraphBarChart data={props.activityData} />
      <ContainerGraphs userData={props.userData} activity={props.activityData} performance={props.performance} average={props.average} /> 
      <AllCards energy={props.userData} /> 
  
    </StyleMaincontainer>
  );
};

export default Content;
