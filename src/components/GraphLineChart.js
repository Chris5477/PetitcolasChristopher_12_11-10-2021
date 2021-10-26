import React from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../styles/LineGraphe.css"


export const GraphLineChart = (props) => {
  const data = props.average[0].sessions;

  return (
    <div className="lineGraph">

      <ResponsiveContainer width={"100%"} height={250}>
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
        <XAxis dataKey="day" stroke="white"/>
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={3} activeDot={{ r: 8 }} dot={{ r: 0 }} />
      </LineChart>
        </ResponsiveContainer>
        </div>
 
  );
};

export default GraphLineChart;
