import { useEffect } from "react";
import { connect } from "react-redux";
import { apiCallAvarage } from "../redux/dataAverage/actionDataAverage";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../styles/LineGraphe.css";
import GraphBarChart from "./GraphBarChart";
import { USER_AVERAGE_SESSIONS } from "../mock/mock_data";

export const GraphLineChart = (/*{average, getDataAverage}*/) => {
  const data = USER_AVERAGE_SESSIONS[0].sessions
 

  // useEffect(() => {
  //   getDataAverage()

  // },[getDataAverage])

  return (
    <div className="lineGraph">
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 5,
            bottom: 10,
          }}
        >
          <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
          <XAxis dataKey="day" stroke="white" />
          <Tooltip />
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

// const mapStateToProps = state => {
//   return{
//     average : state.average
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getDataAverage : () => dispatch(apiCallAvarage())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(GraphLineChart);
export default GraphLineChart;
