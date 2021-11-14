/** To create a graphic with Recharts, just go to the site to know the possibilities of a graph. A component will have parent components
 or child components and each of these components will have props which can change apparence graph.
 Warning, dats must to respect a format of data, see the doc of Recharts */

import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";

const GraphLineChart = ({ average, deviceGraph }) => {
  const allDays = {
    monday: "L",
    tuesday: "M",
    wednesday: "M",
    thurday: "J",
    friday: "F",
    saturday: "S",
    sunday: "D",
  };

  const valuesOfAllDays = Object.values(allDays);

  average.average.data?.sessions.map((el, index) => (el.day = valuesOfAllDays[index]));
  const averageUser = average.average.data?.sessions;

  const CustomStyleToolTip = ({ payload, _, active }) => {
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
          content={<CustomStyleToolTip />}
          wrapperStyle={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "0px 5px",
            fontSize: "14px",
          }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={3}
          strokeDashArray={[5, 5]}
          activeDot={{ r: 8 }}
          dot={{ r: 0 }}
        />
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
