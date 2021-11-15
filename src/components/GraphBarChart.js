/** To create a graphic with Recharts, just go to the site to know the possibilities of a graph. A component will have parent components
 or child components and each of these components will have props which can change apparence graph.
 Warning, dats must to respect a format of data, see the doc of Recharts */

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/barChart.css";
import Proptypes from "prop-types";

const GraphBarChart = ({ activity }) => {
  const activityUser = activity.activity.data ? activity.activity.data.sessions : null;

  /* Loop for in which change value of days by value of key to respect the model of the x axis */

  for (const index in activityUser) {
    activityUser[index].day = Number(index) + 1;
  }

  const CustomStyleToolTip = ({ payload, label, active }) => {
    const valueTooltip = active && (
      <div>
        <p>{payload[0].value}kg</p>
        <hr />
        <p>{payload[1].value}kcal</p>
      </div>
    );

    return valueTooltip;
  };

  return (
    <div className="bar-graphe">
      <ResponsiveContainer width={"100%"} height={"90%"}>
        <BarChart
          data={activityUser}
          barGap={10}
          margin={{
            top: 40,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid verticalPoints={[3, 3]} />

          <XAxis dataKey="day" />
          <YAxis dataKey="calories" tickCount={9} domain={[0, 500]} orientation="right" />
          <Tooltip
            content={<CustomStyleToolTip />}
            wrapperStyle={{
              backgroundColor: "red",
              color: "white",
              textAlign: "center",
              padding: "5px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          />

          <Legend
            wrapperStyle={{ right: 50, top: 10 }}
            iconType={"circle"}
            iconSize={7}
            align={"right"}
            verticalAlign={"top"}
          />
          <text x={10} y={30} fontSize={20}>
            Activité quotidienne
          </text>

          <Bar dataKey="kilogram" name="poids (kg)" barSize={7} fill="black" />
          <Bar dataKey="calories" name="calories brulées (kCal)" barSize={7} fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

GraphBarChart.propTypes = {
  activity: Proptypes.object.isRequired,
};

export default GraphBarChart;
