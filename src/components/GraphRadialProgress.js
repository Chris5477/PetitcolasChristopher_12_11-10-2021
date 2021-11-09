import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import "../styles/radialProgress.css";
import Proptypes from "prop-types";

const GraphRadialProgress = ({ user, deviceGraph }) => {
  const aaa = () => (user.user.data.todayScore != null ? user.user.data.todayScore : user.user.data.score);

  const objectifUser = user.user.data != null ? aaa() * 100 : null;

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
        outerRadius={circleSize / 2 - 40}
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
          de votre objectif
        </text>
      </RadialBarChart>
      <span className="objectif-in-progress">{objectifUser}%</span>
      <span className="label-graph">Score</span>
    </div>
  );
};

GraphRadialProgress.propTypes = {
  user: Proptypes.object.isRequired,
  deviceGraph: Proptypes.number.isRequired,
};

export default GraphRadialProgress;
