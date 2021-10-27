import GraphLineChart from "./GraphLineChart";
import GraphRadarChart from "./GraphRadarChart";
import "../styles/containerGraphes.css";
import GraphRadialProgress from "./GraphRadialProgress";

const ContainerGraphs = ({ user, average, performance }) => {
  const dataLine = average.isLoading ? (
    <div className="spinner"></div>
  ) : average.error ? (
    <p>ERROR</p>
  ) : (
    average.average && <GraphLineChart average={average} />
  );

  const dataRadar = performance.isLoading ? (
    <div className="spinner"></div>
  ) : performance.error ? (
    <p>ERROR</p>
  ) : (
    performance.performance && <GraphRadarChart performance={performance} />
  );

  const dataradial = user.isLoading ? (
    <div className="spinner"></div>
  ) : user.error ? (
    <p>ERROR</p>
  ) : (
    user.user && <GraphRadialProgress user={user} />
  );
  return (
    <div className="container-graphes">
      {dataLine}
      {dataRadar}
      {dataradial}
    </div>
  );
};

export default ContainerGraphs;
