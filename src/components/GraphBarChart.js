import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyleGraph1 = styled.div`
  grid-area: 2/2/3/3;
`;

export const GraphBarChart = (props) => {


  for (let key in props.data.sessions) {
    props.data.sessions[key].day = key;
  }



  return (
    <StyleGraph1>
     <ResponsiveContainer>

      <BarChart
       
        data={props.data.sessions}
        margin={{
          top: 5,
          right: 10,
          left: 30,
          bottom: 20,
        }}
        >
        <CartesianGrid verticalPoints={[0, 0]} />
        <XAxis dataKey="ay" />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend iconType={"circle"} iconSize={7} align={"right"} verticalAlign={"top"} />
        <Bar dataKey="kilogram" barSize={7} fill="black" />
        <Bar dataKey="calories" barSize={7} fill="red" />
      </BarChart>
        </ResponsiveContainer> 
    </StyleGraph1>
  );
};

export default BarChart;
