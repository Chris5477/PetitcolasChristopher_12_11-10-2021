import React from "react";
import styled from "styled-components";
import { USER_PERFORMANCE as data } from "../mock/mock_data";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LabelList } from "recharts";

const StyleGraph3 = styled.div`
  background-color: black;
  width: 220px;
  height: 220px;
`;

const val = Object.values(data[0].kind);

for (const index in data.data) {
  data.data[index].kind = val[index];
}

export const GraphRadarChart = () => {
  return (
    <StyleGraph3>
      <RadarChart width={220} height={220} cx={110} cy={110} outerRadius={90} data={data[0].data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white"/>;
      </RadarChart>
    </StyleGraph3>
  );
};

export default GraphRadarChart;
