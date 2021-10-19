import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar} from "recharts";

const GraphRadialProgress = (props) => {
  const objectif = props.userData[0].todayScore * 100;

  const data = [{ name: "Objectif", value: objectif }];

  const circleSize = 220;
  return (


    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      innerRadius={90}
      outerRadius={120}
      barSize={5}
      data={data}
      startAngle={230}
      endAngle={-130}
      >
      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
      <RadialBar background clockWise dataKey="value" cornerRadius={circleSize / 2} fill="red" />
      <text x={circleSize / 2} y={circleSize / 2} textAnchor="middle" dominantBaseline="middle" className="progress-label">
        {objectif} de votre Objectif
      </text>
    </RadialBarChart>
       
  );
};
export default GraphRadialProgress;
