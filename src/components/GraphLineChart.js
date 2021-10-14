import React from "react";
import { USER_AVERAGE_SESSIONS as data } from "../mock/mock_data";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
import styled from "styled-components";

const StyleGraph2 = styled.div`
  background-color: red;
`;
export const GraphLineChart = () => {
  return (
    <StyleGraph2>
         <LineChart
      width={350}
      height={350}
      data={data[0].sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="sessionLength" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        activeDot={{ r: 8 }}
      />
    </LineChart>
     </StyleGraph2>
  );
};

export default GraphLineChart;
