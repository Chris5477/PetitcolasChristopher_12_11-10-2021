import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList, ResponsiveContainer } from "recharts";
import "../styles/radarGraphe.css";
import Proptypes from "prop-types";

const GraphRadarChart = ({ performance, deviceGraph }) => {
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
      <RadarChart
        width={deviceGraph}
        height={deviceGraph}
        cx={deviceGraph / 2}
        cy={deviceGraph / 2}
        outerRadius={deviceGraph / 3}
        data={performanceUser.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} fontSize="14px" />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  ) : null;
};
GraphRadarChart.propTypes = {
  performance: Proptypes.object.isRequired,
  deviceGraph: Proptypes.number.isRequired,
};

export default GraphRadarChart;
