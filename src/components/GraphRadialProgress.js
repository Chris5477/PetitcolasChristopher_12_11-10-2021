import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import "../styles/radialProgress.css";
import Proptypes from "prop-types";

const GraphRadialProgress = ({ user, deviceGraph }) => {
  const objectifUser = user.user.data != null ? user.user.data.todayScore * 100 : null;

  const dataScore = [{ name: "Objectif", value: objectifUser }];

 

  const circleSize = deviceGraph;
  return (
    <div className="radial-graphe">
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={circleSize - circleSize / 2}
          outerRadius={circleSize / 2 - 10}
          barSize={10}
          data={dataScore}
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
            {objectifUser}% de votre Objectif
          </text>
        </RadialBarChart>
    </div>
  );
};

GraphRadialProgress.propTypes = {
  user: Proptypes.object.isRequired,
  deviceGraph : Proptypes.number.isRequired
};

export default GraphRadialProgress;
