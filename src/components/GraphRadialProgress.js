import { useEffect } from "react";
import { connect } from "react-redux";
import { RadialBarChart, PolarAngleAxis, ResponsiveContainer, RadialBar } from "recharts";
import { apiCallUser } from "../redux/dataUser/actionDataUser";
import "../styles/radialProgress.css";
import { USER_MAIN_DATA } from "../mock/mock_data";

const GraphRadialProgress = (/*{user, getDataUser}*/) => {

  const objectif = USER_MAIN_DATA[0].todayScore * 100

 

  // useEffect(() => {
  //   getDataUser()
  // },[getDataUser])
  
  // const objectif = user.user.data.todayScore * 100 ;

  const data = [{ name: "Objectif", value: objectif }];

  const circleSize = 250;
  return (
    <div className="radial-graphe">
      <ResponsiveContainer>
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={90}
          outerRadius={120}
          barSize={10}
          data={data}
          startAngle={230}
          endAngle={-130}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background clockWise dataKey="value" cornerRadius={circleSize / 2} fill="red" />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            {objectif} de votre Objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );


};

// const mapStateToProps = (state) => {
//   return{
//     user : state.user
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     getDataUser : () => dispatch(apiCallUser())
//   }
// }

// export default  connect(mapStateToProps, mapDispatchToProps)(GraphRadialProgress);

export default GraphRadialProgress