import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/barChart.css";
import Proptypes from "prop-types";

const GraphBarChart = ({ activity }) => {
  const activityUser = activity.activity.data ? activity.activity.data.sessions : null;

  /* Loop for in which change value of days by value of key to respect the axis X of BarChart */

  for (const index in activityUser) {
    activityUser[index].day = Number(index) + 1;
  }

  const CustomToolTip = ({ payload, label, active }) => {
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
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid verticalPoints={[3, 3]} />

          <XAxis dataKey="day" />

          <YAxis orientation="right" />

          <Tooltip
            content={<CustomToolTip />}
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
            wrapperStyle={{ right: 50, top: -5 }}
            iconType={"circle"}
            iconSize={7}
            align={"right"}
            verticalAlign={"top"}
          />
          <text x={10} y={15} fontSize={20}>
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
