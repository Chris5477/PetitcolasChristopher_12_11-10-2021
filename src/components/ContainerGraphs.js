import GraphLineChart from "./GraphLineChart"
import GraphRadarChart from "./GraphRadarChart"
import "../styles/containerGraphes.css"
import GraphRadialProgress from "./GraphRadialProgress"

const ContainerGraphs = () => {

  return(
    <div className="container-graphes">
    <GraphLineChart  />
    <GraphRadarChart />
    <GraphRadialProgress />
    </div>
 
  )
}

export default ContainerGraphs

