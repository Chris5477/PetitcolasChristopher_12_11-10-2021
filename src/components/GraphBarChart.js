import { USER_ACTIVITY as data } from "../mock/mock_data"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import styled from "styled-components";

const StyleGraph1 = styled.div`
grid-area : 2/2/3/3`


export const GraphBarChart = () =>  {
  return (
    <StyleGraph1>

    <BarChart
      width={1400}
      height={300}
      data={data.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="black" />
      <Bar dataKey="calories" fill="red" />
    </BarChart>
      </StyleGraph1>
  );
}

export default BarChart