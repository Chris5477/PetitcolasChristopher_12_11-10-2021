import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList } from "recharts";
import "../styles/radarGraphe.css";

const GraphRadarChart = ({ performance }) => {
  const getData = (dataGraphe) => {
    const val = Object.values(dataGraphe.kind);

    for (let key in dataGraphe.data) {
      dataGraphe.data[key].kind = val[key];
    }
    return dataGraphe;
  };

  const data = performance.performance.data != null ? getData(performance.performance.data) : null;

  return data != null ? (
    <div className="radarGraphe">
      <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  ) : null;
};

export default GraphRadarChart;
