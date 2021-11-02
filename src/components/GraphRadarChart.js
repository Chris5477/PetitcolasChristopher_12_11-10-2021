import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList } from "recharts";
import "../styles/radarGraphe.css";
import Proptypes from "prop-types";

const GraphRadarChart = ({ performance }) => {
  /**
   * method changes object data to format require by Rechart to make un radarChart
   * @param {object} dataRadarGraph
   * @returns new object
   */

  const getData = (dataRadarGraph) => {
    const val = Object.values(dataRadarGraph.kind);

    for (let key in dataRadarGraph.data) {
      dataRadarGraph.data[key].kind = val[key];
    }
    return dataRadarGraph;
  };

  const performanceUser = performance.performance.data != null ? getData(performance.performance.data) : null;

  return performanceUser != null ? (
    <div className="radarGraphe">
      <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={performanceUser.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  ) : null;
};
GraphRadarChart.propTypes = {
  performance: Proptypes.object.isRequired,
};

export default GraphRadarChart;
