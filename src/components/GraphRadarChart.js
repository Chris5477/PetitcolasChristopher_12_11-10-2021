import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList } from "recharts";
import "../styles/radarGraphe.css";

const GraphRadarChart = ({ performance }) => {
  const data = performance.performance.data;

  const val = Object.values(data.kind);

  for (let key in data.data) {
    data.data[key].kind = val[key];
  }

  const dataGraphe = data.data
  // const data = null

  return (
    <div className="radarGraphe">
      <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={dataGraphe}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  );
};

export default GraphRadarChart;
