import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";

const GraphLineChart = ({ average, deviceGraph }) => {
  const averageUser = average.average.data != null ? average.average.data.sessions : null;

  return (
    <div className="lineGraph">
      <LineChart
        width={deviceGraph}
        height={deviceGraph}
        data={averageUser}
        margin={{
          top: 50,
          right: 5,
          left: 5,
          bottom: 10,
        }}
      >
        <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
        <XAxis dataKey="day" stroke="white" />
        <Tooltip itemStyle={{ width: "39px", height: "15px" }} />
        <text x={15} y={20} fontSize={18} fill="white">
          Durée moyenne des sessions
        </text>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={3}
          activeDot={{ r: 8 }}
          dot={{ r: 0 }}
        />
      </LineChart>
    </div>
  );
};

GraphLineChart.propTypes = {
  average: Proptypes.object.isRequired,
  deviceGraph: Proptypes.number.isRequired,
};

export default GraphLineChart;
