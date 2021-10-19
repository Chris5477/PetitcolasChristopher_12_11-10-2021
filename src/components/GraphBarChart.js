//IMPORT ALL DEPENDENCIES
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

//STYLE DIV TAG
const StyleGraph1 = styled.div`
  grid-area: 2/2/3/3;
`;

//BUILD COMPONENT GRAPHBARCHART THAT RETRIEVES PROPS
const GraphBarChart = (props) => {
  // USE FOR IN LOOP TO ACT ON EACH ITERATION TO REPLACE VALUE BY VALUE KEY
  for (let key in props.data.sessions) {
    props.data.sessions[key].day = key;
  }

  return (
      /* COMPONENT OF STYLE*/
    <StyleGraph1>
      {/*REACT COMPONENT THAT MANAGE RESPONSIV GRAPHIC*/}
      <ResponsiveContainer>
        {/*REACT COMPONENT THAT MANAGE EACH PROPRIETY OF GRAPHIC*/}
        <BarChart
       /*DATA TO RETRANSCRIBE OUR DATA ON THE GRAPHIC*/
          data={props.data.sessions}
          /*MANAGE MARGIN OF GRAPHIC*/
          margin={{
            top: 5,
            right: 10,
            left: 30,
            bottom: 20,
          }}
        >
          {/*MANAGE GRID OF GRAPHCI , IN OUR CASE , THERE IS ONLY VERTICAL GRID*/}
          <CartesianGrid verticalPoints={[0, 0]} />
          {/*INDICATE DATA TO ANALYZE ON AXIS X*/}
          <XAxis dataKey="day" />
          {/*INDICATE VALUE TO ANALYSE AND ORIENTED ON THE RIGHT SIDE*/}
          <YAxis orientation="right" />
          {/*INDICATE TO USER THE INFORMATION ABOUT THE CURRENT DATA*/}
          <Tooltip />
          {/*MANAGE LEGEND OF OUR GRAPHIC WITH SIZE OF ICON , AND HIS PLACEMENT*/}
          <Legend iconType={"circle"} iconSize={7} align={"right"} verticalAlign={"top"} />
          {/*DRAW BARS IN TERMS OF DATA , WE CAN SET APPARENCE OF BARS*/}
          <Bar dataKey="kilogram" barSize={7} fill="black" />
          <Bar dataKey="calories" barSize={7} fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </StyleGraph1>
  );
};

export default GraphBarChart;
