import React from "react";
import styled from "styled-components";
import { USER_PERFORMANCE as data } from "../mock/mock_data";





import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const StyleGraph3 = styled.div`
background-color: black;`




  const val = Object.values(data[0].kind)

  for (const index in data.data){
    data.data[index].kind = val[index]
  }

  console.log(data)
 
export const GraphRadarChart = () =>{
  return (
      <StyleGraph3>

    <RadarChart
      cx={175}
      cy={175}
      outerRadius={150}
      width={350}
      height={350}
      data={data[0].data}
      >
      <PolarGrid/>
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar
        dataKey="value"
        stroke="red"
        fill="red"
        fillOpacity={0.7}
        />
    </RadarChart>
        </StyleGraph3>
  );
}

export default GraphRadarChart
