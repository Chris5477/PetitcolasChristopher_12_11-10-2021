import { RadialBarChart, PolarAngleAxis, ResponsiveContainer, RadialBar } from "recharts";

import "../styles/radialProgress.css";

const GraphRadialProgress = ({ user }) => {
  const objectif = user.user.data != null ? user.user.data.score * 100 : null;

  const data = [{ name: "Objectif", value: objectif }];

  const circleSize = 250;
  return (
    <div className="radial-graphe">
      <ResponsiveContainer>
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={90}
          outerRadius={120}
          barSize={10}
          data={data}
          startAngle={230}
          endAngle={-130}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background clockWise dataKey="value" cornerRadius={circleSize / 2} fill="red" />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            {objectif}% de votre Objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphRadialProgress;
