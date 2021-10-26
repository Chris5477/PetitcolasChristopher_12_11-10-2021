import GraphLineChart from "./GraphLineChart"
import GraphRadarChart from "./GraphRadarChart"
import "../styles/containerGraphes.css"
import GraphRadialProgress from "./GraphRadialProgress"

const ContainerGraphs = ({average, performance, userData}) => {

  return(
    <div className="container-graphes">
    <GraphLineChart average={average} />
    <GraphRadarChart performance={performance} />
    <GraphRadialProgress userData={userData}/>
    </div>
 
  )
}

export default ContainerGraphs

