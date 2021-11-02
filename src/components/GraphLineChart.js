import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";

export const GraphLineChart = ({ average }) => {
  const averageUser = average.average.data != null ? average.average.data.sessions : null;

  return (
    <div className="lineGraph">
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          data={averageUser}
          margin={{
            top: 50,
            right: 0,
            left: 0,
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
      </ResponsiveContainer>
    </div>
  );
};

GraphLineChart.propTypes = {
  average: Proptypes.object.isRequired,
};

export default GraphLineChart;
