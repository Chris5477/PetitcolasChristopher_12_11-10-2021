import { useEffect } from "react";
import { connect } from "react-redux";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList } from "recharts";
import { apiCallPerformance } from "../redux/dataPerformance/actionDataPerformance";
import "../styles/radarGraphe.css";
import { USER_PERFORMANCE } from "../mock/mock_data";

const GraphRadarChart = (/*{performance, getDataPerformance}*/) => {
  // useEffect(() => {
  //   getDataPerformance()
  // }, [getDataPerformance])

  const data = USER_PERFORMANCE[0];

  const val = Object.values(data.kind);

  for (let key in data.data) {
    data.data[key].kind = val[key];
  }

  return (
    <div className="radarGraphe">
      <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return{
//     performance : state.performance
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     getDataPerformance : () => dispatch(apiCallPerformance())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GraphRadarChart);
export default GraphRadarChart;
