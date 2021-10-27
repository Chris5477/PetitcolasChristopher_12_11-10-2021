import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";
import Header from "./Header";
import GraphBarChart from "./GraphBarChart";
import "../styles/profil.css";
import ContainerGraphs from "./ContainerGraphs";
import AllCards from "./AllCard";
import { useEffect } from "react";
import { connect } from "react-redux";
import { apiCallAvarage } from "../redux/dataAverage/actionDataAverage";
import { apiCallUser } from "../redux/dataUser/actionDataUser";
import { apiCallActivity } from "../redux/dataActivity/actionDataActivity";
import { apiCallPerformance } from "../redux/dataPerformance/actionDataPerformance";

const ProfilContainer = ({
  id,
  user,
  getDataUser,
  activity,
  getDataActivity,
  average,
  getDataAverage,
  performance,
  getDataPerformance,
}) => {
  useEffect(() => {
    getDataUser(id);
    getDataActivity(id);
    getDataAverage(id);
    getDataPerformance(id);
  }, []);

  const dataHeader = user.isLoading ? (
    <div className="spinner"></div>
  ) : user.error ? (
    <p>ERROR</p>
  ) : (
    user.user && <Header user={user} />
  );

  const dataBar = activity.isLoading ? (
    <div className="spinner"></div>
  ) : activity.error ? (
    <p>ERROR</p>
  ) : (
    activity.activity && <GraphBarChart activity={activity} />
  );

  const dataOtherGraph = user.isLoading ? (
    <div className="spinner"></div>
  ) : user.error ? (
    <p>ERROR</p>
  ) : (
    user.user && <AllCards user={user} />
  );

  return (
    <div className="profil-page">
      <Navigation />
      <Navigation2 />
      {dataHeader}
      {dataBar}
      <ContainerGraphs user={user} average={average} performance={performance} />
      {dataOtherGraph}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activity: state.activity,
    average: state.average,
    performance: state.performance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataUser: (id) => dispatch(apiCallUser(id)),
    getDataActivity: (id) => dispatch(apiCallActivity(id)),
    getDataAverage: (id) => dispatch(apiCallAvarage(id)),
    getDataPerformance: (id) => dispatch(apiCallPerformance(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilContainer);
