//IMPORT ALL DEPENDENCIES
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/barChart.css"

//BUILD COMPONENT GRAPHBARCHART THAT RETRIEVES PROPS
const GraphBarChart = ({activityData}) => {
  // USE FOR IN LOOP TO ACT ON EACH ITERATION TO REPLACE VALUE BY VALUE KEY
  for (let key in activityData.sessions) {
    activityData.sessions[key].day = key;
  }

  return (
      /* COMPONENT OF STYLE*/
      /*REACT COMPONENT THAT MANAGE RESPONSIV GRAPHIC*/
      <div className="bar-graphe">

      <ResponsiveContainer width={"100%"} height={"100%"}>
        {/*REACT COMPONENT THAT MANAGE EACH PROPRIETY OF GRAPHIC*/}
        <BarChart
       /*DATA TO RETRANSCRIBE OUR DATA ON THE GRAPHIC*/
       data={activityData.sessions}
       /*MANAGE MARGIN OF GRAPHIC*/
       margin={{
         top: 5,
         right: 30,
         left: 80,
         bottom: 20,
        }}
        >
          {/*MANAGE GRID OF GRAPHCI , IN OUR CASE , THERE IS ONLY VERTICAL GRID*/}
          <CartesianGrid verticalPoints={[0, 0]} />
          {/*INDICATE DATA TO ANALYZE ON AXIS X*/}
          <XAxis dataKey="day"/>
          {/*INDICATE VALUE TO ANALYSE AND ORIENTED ON THE RIGHT SIDE*/}
          <YAxis orientation="right" />
          {/*INDICATE TO USER THE INFORMATION ABOUT THE CURRENT DATA*/}
          <Tooltip />
          {/*MANAGE LEGEND OF OUR GRAPHIC WITH SIZE OF ICON , AND HIS PLACEMENT*/}
          <Legend wrapperStyle={{right: 120, top: -30}} iconType={"circle"} iconSize={7} align={"right"} verticalAlign={"top"} />
          {/*DRAW BARS IN TERMS OF DATA , WE CAN SET APPARENCE OF BARS*/}
          <Bar dataKey="kilogram" barSize={7} fill="black"/>
          <Bar dataKey="calories" barSize={7} fill="red" />
        </BarChart>
      </ResponsiveContainer>
          </div>
  );
};

export default GraphBarChart;
