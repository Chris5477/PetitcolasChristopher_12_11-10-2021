import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "../styles/radarGraphe.css";
import Proptypes from "prop-types";

const GraphRadarChart = ({ performance, deviceGraph }) => {
  /**
   * method changes object data to format require by Rechart to make un radarChart
   * @param {object} dataRadarGraph
   * @returns new object
   */

  const wxc = [];
  const getData = (dataRadarGraph) => {
    const typeStats = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

    for (let key in dataRadarGraph.data) {
      dataRadarGraph.data[key].kind = typeStats[key];
      wxc.push(dataRadarGraph.data[key]);
    }
    wxc.reverse();
    return wxc;
  };
  const performanceUser = performance.performance.data != null ? getData(performance.performance.data) : null;

  return performanceUser != null ? (
    <div className="radarGraphe">
      <RadarChart
        width={deviceGraph}
        height={deviceGraph}
        cx={deviceGraph / 2}
        cy={deviceGraph / 2}
        outerRadius={deviceGraph / 3}
        data={performanceUser}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="white" fontSize={deviceGraph / 20} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
      </RadarChart>
    </div>
  ) : null;
};

GraphRadarChart.propTypes = {
  performance: Proptypes.object.isRequired,
  deviceGraph: Proptypes.number.isRequired,
};

export default GraphRadarChart;
