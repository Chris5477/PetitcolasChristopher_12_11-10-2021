import React from "react";
import { USER_AVERAGE_SESSIONS as data } from "../mock/mock_data";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
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
        bottom: 50
      }}
    >
      <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
      <XAxis dataKey="day"/>
      <Tooltip  />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        strokeWidth={3}
        activeDot={{ r: 8 }}
        dot={{r: 0}}
      />
    </LineChart>
     </StyleGraph2>
  );
};

export default GraphLineChart;
