import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import "../styles/containerGraphes.css";
import GraphRadialProgress from "./GraphRadialProgress";
import Proptypes from "prop-types"

const ContainerGraphs = ({ user, average, performance }) => {

  
  return (
    <div className="container-graphes">
      <GraphLineChart average={average} />
      <GraphRadarChart performance={performance}/>
      <GraphRadialProgress user={user}/>
    </div>
  );
};

ContainerGraphs.propTypes = {
  user : Proptypes.object.isRequired,
  average : Proptypes.object.isRequired,
  performance: Proptypes.object.isRequired
}


export default ContainerGraphs;
