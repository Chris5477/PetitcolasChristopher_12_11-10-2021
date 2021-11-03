import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";

const GraphLineChart = ({ average, deviceGraph }) => {
  const averageUser = average.average.data != null ? average.average.data.sessions : null;

  const CustomToolTip = ({ payload, label, active }) => {
    const valueTooltip = active && (
      <div>
        <p>{payload[0].value} min</p>
      </div>
    );
    return valueTooltip;
  };

  return (
    <div className="lineGraph">
      <LineChart
        width={deviceGraph}
        height={deviceGraph}
        data={averageUser}
        margin={{
          top: 70,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
        <XAxis dataKey="day" stroke="white" />
        <Tooltip
          content={<CustomToolTip />}
          wrapperStyle={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "0px 5px",
            fontSize: "14px",
          }}
        />
        <Line type="basis" dataKey="sessionLength" stroke="white" strokeWidth={3} activeDot={{ r: 8 }} dot={{ r: 0 }} />
      </LineChart>

      <span className="name-line">Durée moyenne des sessions </span>
    </div>
  );
};

GraphLineChart.propTypes = {
  average: Proptypes.object.isRequired,
  deviceGraph: Proptypes.number.isRequired,
};

export default GraphLineChart;
