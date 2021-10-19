import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
import { USER_MAIN_DATA as data } from "../mock/mock_data";

const obj = []

for ( let currentData of data){
  obj.push({ uv : currentData.todayScore , fill : "red"})
}

const GraphRadialProgress = () => {
  return (
    <RadialBarChart  width={350} height={350} cx={175} cy={175} innerRadius={150} outerRadius={140} barSize={10}  data={obj}>
      <RadialBar minAngle={15}  background clockWise dataKey="uv" />
    </RadialBarChart>
  );
};

export default GraphRadialProgress;
