import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";
import { useRef } from "react";

const GraphLineChart = ({ average, deviceGraph }) => {

  const aaa = useRef()

  
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
    <div ref={aaa} className="lineGraph">
      {console.log(aaa)}
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
        <Tooltip
          content={<CustomToolTip />}
          wrapperStyle={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "0px 5px",
            fontSize: "14px",
          }}
        />
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
