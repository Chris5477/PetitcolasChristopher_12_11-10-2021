import styled from "styled-components";
import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import GraphRadialProgress from "./GraphRadialProgress";


const AllGraphs = styled.div`
  grid-area: 3/2/4/3;
  display:flex;
  justify-content: space-around;
  position : relative;
  margin-left: 50px;
`;

const TxtStyle = styled.p`
position: absolute;
bottom: 25%;
right: 12.5%;
display: flex;
flex-direction: column;
width: 100px;
font-size:24px;
color:grey;
`
const StyleSpan = styled.span`
font-size: 40px;
font-weight: bolder;
color:black;
`

const ContainerGraphs = (props) => {
  const objectif = props.data

  return (
    <AllGraphs>
      <GraphLineChart />
      <GraphRadarChart />
      <GraphRadialProgress />
      <TxtStyle><StyleSpan>{objectif * 100 }% </StyleSpan>de votre objectif</TxtStyle>
    </AllGraphs>
  );
};

export default ContainerGraphs;
