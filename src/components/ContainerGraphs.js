import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import "../styles/containerGraphes.css";
import GraphRadialProgress from "./GraphRadialProgress";

const ContainerGraphs = ({ user, average, performance }) => {
  
  return (
    <div className="container-graphes">
      <GraphLineChart average={average} />
      <GraphRadarChart performance={performance}/>
      <GraphRadialProgress user={user}/>
    </div>
  );
};

export default ContainerGraphs;
