import {useEffect} from "react";
import { connect } from "react-redux";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, LabelList } from "recharts";
import { apiCallPerformance } from "../redux/dataPerformance/actionDataPerformance";
import "../styles/radarGraphe.css";



  const GraphRadarChart = ({performance, getData}) => {

    useEffect(() => {
      getData()
    }, [getData])
    
  //   const val = Object.values(performance.performance.data.kind);
  //   for (let key in performance.performance.data) {
  //     performance.performance.data[key].kind = val[key];
  // }
   


  return (
    <div className="radarGraphe">
      <RadarChart width={250} height={250} cx={125} cy={125} outerRadius={80} data={performance}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke={"white"} />
        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.7} />
        <LabelList color="white" />;
      </RadarChart>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    performance : state.performance
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getData : () => dispatch(apiCallPerformance())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphRadarChart);
