import React from "react";

import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyleGraph2 = styled.div`
  background-color: red;
  width: 220px;
  height: 220px;
`;

export const GraphLineChart = (props) => {
  const data = props.average[0].sessions;

  return (
    <StyleGraph2>
      <ResponsiveContainer minWidth="220px">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 5,
          bottom: 10,
        }}
        >
        <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
        <XAxis dataKey="day" />
        <Tooltip />
        <Line width={220} height={220} type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={3} activeDot={{ r: 8 }} dot={{ r: 0 }} />
      </LineChart>
        </ResponsiveContainer>
    </StyleGraph2>
  );
};

export default GraphLineChart;
