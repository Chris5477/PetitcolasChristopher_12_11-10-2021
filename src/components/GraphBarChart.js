import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/barChart.css";
import Proptypes from "prop-types";

const GraphBarChart = ({ activity }) => {
  const activityUser = activity.activity.data ? activity.activity.data.sessions : null;

  /* Loop for in which change value of days by value of key to respect the axis X of BarChart */

  for (const index in activityUser) {
    activityUser[index].day = Number(index) + 1;
  }

  return (
    <div className="bar-graphe">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={activityUser}
          margin={{
            top: 40,
            right: 30,
            left: 80,
            bottom: 20,
          }}
        >
          <CartesianGrid verticalPoints={[3, 3]} />

          <XAxis dataKey="day" />

          <YAxis orientation="right" />

          <Tooltip
            itemStyle={{
              backgroundColor: "red",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center",
              width: "39px",
              height: "64 px",
            }}
          />

          <Legend
            wrapperStyle={{ right: 50, top: 0 }}
            iconType={"circle"}
            iconSize={7}
            align={"right"}
            verticalAlign={"top"}
          />
          <text x={100} y={20} fontSize={20}>
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
