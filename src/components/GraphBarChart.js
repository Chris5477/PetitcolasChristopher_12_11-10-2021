import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../styles/barChart.css";

const GraphBarChart = ({ activity }) => {
  const data = activity.activity.data.sessions;

  for (const index in data) {
    data[index].day = index;
  }

  // const data = null
  return (
    <div className="bar-graphe">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 20,
          }}
        >
          <CartesianGrid verticalPoints={[0, 0]} />

          <XAxis dataKey="day" />

          <YAxis orientation="right" />

          <Tooltip />

          <Legend
            wrapperStyle={{ right: 120, top: -30 }}
            iconType={"circle"}
            iconSize={7}
            align={"right"}
            verticalAlign={"top"}
          />

          <Bar dataKey="kilogram" barSize={7} fill="black" />
          <Bar dataKey="calories" barSize={7} fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphBarChart;
