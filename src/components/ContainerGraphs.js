import styled from "styled-components";
import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import GraphRadialProgress from "./GraphRadialProgress";

const AllGraphs = styled.div`
  @media screen and (min-width: 1024px) {
    grid-area: 3/2/4/3;
    display: flex;
    justify-content: space-between;
  }
`;

const StyleSpan = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: black;
  position: relative;
  right: 210px;
`;

const ContainerGraphs = (props) => {
  return (
    <AllGraphs>
      <GraphLineChart average={props.average} />
      <GraphRadarChart performance={props.performance} />
      <GraphRadialProgress userData={props.userData} />

      <StyleSpan>Score</StyleSpan>
    </AllGraphs>
  );
};

export default ContainerGraphs;
