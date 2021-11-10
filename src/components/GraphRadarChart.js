import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "../styles/radarGraphe.css";
import Proptypes from "prop-types";

const GraphRadarChart = ({ performance, deviceGraph }) => {


  const typeStats = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const sortStats = Object.values(typeStats);

  const utilDataStats = [];

  const performanceData = performance.performance.data;

  // Allow to change typesStats respecting the model and translating it

  const performanceUser =
    performanceData != null
      ? performanceData.data.map((_, index) => {
          performanceData.data[index].kind = sortStats[index];
          return utilDataStats.push(performanceData.data[index]);
        })
      : null;

  utilDataStats.reverse();

  return performanceUser != null ? (
    <div className="radarGraphe">
      <RadarChart
        width={deviceGraph}
        height={deviceGraph}
        cx={deviceGraph / 2}
        cy={deviceGraph / 2}
        outerRadius={deviceGraph / 3}
        data={utilDataStats}
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
