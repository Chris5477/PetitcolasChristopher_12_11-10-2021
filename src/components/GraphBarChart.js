import { useEffect } from "react";
import { connect } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { apiCallActivity } from "../redux/dataActivity/actionDataActivity";
import "../styles/barChart.css";

const GraphBarChart = ({ activity, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="bar-graphe">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={activity}
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

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(apiCallActivity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphBarChart);
