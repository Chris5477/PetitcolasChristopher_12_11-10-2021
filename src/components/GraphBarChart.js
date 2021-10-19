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
grid-area : 2/2/3/3`;

for (let key in data.sessions){
  data.sessions[key].day = key
}

export const GraphBarChart = () =>  {
  return (
    <StyleGraph1>

    <BarChart
      width={1200}
      height={350}
      data={data.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 80,
        bottom: 50
      }}
    >

    {console.log(<Legend />)}
      <CartesianGrid verticalPoints={[0,0]} />
      <XAxis dataKey="day"/>
      <YAxis orientation="right"/>
      <Tooltip />
      <Legend iconType={"circle"} iconSize={7} align={"right"} verticalAlign={"top"} />
      <Bar dataKey="kilogram" barSize={7} fill="black" />
      <Bar dataKey="calories" barSize={7} fill="red" />
    </BarChart>
      </StyleGraph1>
  );
}

export default BarChart