import React from "react";
import { USER_PERFORMANCE as data } from "../mock/mock_data";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList, ResponsiveContainer } from "recharts";
import "../styles/radarGraphe.css"

const val = Object.values(data[0].kind);

for (let key in data[0].data) {
  data[0].data[key].kind = val[key];
}
  const GraphRadarChart = () => {

  return (
    <div className="radarGraphe">

    
    <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={data[0].data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" stroke={"white"} />
      <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
      <LabelList color="white" />;
    </RadarChart>
  
    </div>
  )
  }

export default GraphRadarChart
