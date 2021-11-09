import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/LineGraphe.css";
import Proptypes from "prop-types";

const GraphLineChart = ({ average, deviceGraph }) => {

  const dayWeek = ["L","M","M","J","V","S","D"]
  const setValueAxixXGraphic = () => {

    const dataAverage = average.average.data.sessions
    for (const index in dataAverage){
      dataAverage[index].day = dayWeek[index]
    }
    return dataAverage
  }
  
  const averageUser = average.average.data != null ? setValueAxixXGraphic() : null;



  const CustomToolTip = ({ payload, _, active }) => {
    const valueTooltip = active && (
      <div>
        <p className="a">{payload[0].value} min</p>
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
          content={<CustomToolTip />}
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
          strokeDashArray={[5,5]}
          activeDot={{ r: 8 }}
          dot={{ r: 0}}
          
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
