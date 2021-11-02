import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import "../styles/containerGraphes.css";
import GraphRadialProgress from "./GraphRadialProgress";
import Proptypes from "prop-types";

const ContainerGraphs = ({ user, average, performance, device }) => {
  return (
    <div className="container-graphes">
      <GraphLineChart average={average} deviceGraph={device} />
      <GraphRadarChart performance={performance} deviceGraph={device} />
      <GraphRadialProgress user={user} deviceGraph={device} />
    </div>
  );
};

ContainerGraphs.propTypes = {
  user: Proptypes.object.isRequired,
  average: Proptypes.object.isRequired,
  performance: Proptypes.object.isRequired,
  device: Proptypes.number.isRequired
};

export default ContainerGraphs;
