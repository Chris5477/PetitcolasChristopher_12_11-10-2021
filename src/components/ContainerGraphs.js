import styled from "styled-components";
import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";


const AllGraphs = styled.div`
  grid-area: 3/2/4/3;
  display:flex;
  justify-content: space-around;
`;
const ContainerGraphs = () => {
  return (
    <AllGraphs>
      <GraphLineChart />
      <GraphRadarChart />
    </AllGraphs>
  );
};

export default ContainerGraphs;
