import GraphLineChart from "./GraphLineChart"
import GraphRadarChart from "./GraphRadarChart"
import "../styles/containerGraphes.css"
import GraphRadialProgress from "./GraphRadialProgress"

const ContainerGraphs = ({user, average, performance}) => {

  const ccc = average.isLoading ? <div className="spinner">HELLO</div> : average.error ? <p>ERROR</p> : average.average &&
  <GraphLineChart average={average} />

  const ddd = performance.isLoading ? <div className="spinner">HELLO</div> : performance.error ? <p>ERROR</p> : performance.performance &&
  <GraphRadarChart performance={performance} />

  const eee = user.isLoading ? <div className="spinner">HELLO</div> : user.error ? <p>ERROR</p> : user.user &&
  <GraphRadialProgress user={user} />
  return(
    <div className="container-graphes">
    {ccc}
    {ddd}
    {eee}
    </div>
 
  )
}

export default ContainerGraphs

