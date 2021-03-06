import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";
import Header from "./Header";
import GraphBarChart from "./GraphBarChart";
import "../styles/profil.css";
import ContainerGraphs from "./ContainerGraphs";
import ContainerCard from "./ContainerCard";
import { useEffect } from "react";
import { connect } from "react-redux";
import { apiCallAvarage } from "../redux/dataAverage/actionDataAverage";
import { apiCallUser } from "../redux/dataUser/actionDataUser";
import { apiCallActivity } from "../redux/dataActivity/actionDataActivity";
import { apiCallPerformance } from "../redux/dataPerformance/actionDataPerformance";
import Proptypes from "prop-types";

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
  /* To do requests api in terms of id user */
  const widthDevice =
    window.innerWidth <= 1281 ? 180 : window.innerWidth > 1281 && window.innerWidth <= 1481 ? 240 : 300;

  const listErrorMsg = []
  listErrorMsg.push(user.error, activity.error, average.error, performance.error)

  useEffect(() => {
    getDataUser(id);
    getDataActivity(id);
    getDataAverage(id);
    getDataPerformance(id);
  }, [id, getDataUser, getDataActivity, getDataAverage, getDataPerformance]);

  let responseCallsApi = null

  if(  user.isLoading || activity.isLoading || average.isLoading || performance.isLoading){
    responseCallsApi =  <div className="spinner"></div>
  }else if( user.error || activity.error || average.error || performance.error ){
    const isErrorMsg = listErrorMsg.find(el => el)
    responseCallsApi = <p className="txt-error">{isErrorMsg}</p>
  }else{
    responseCallsApi = 
    <>
         <Header user={user} />
         <GraphBarChart activity={activity} />
         <ContainerGraphs user={user} average={average} performance={performance} device={widthDevice} />
         <ContainerCard user={user} />
       </>
  }
  
  return (
    <div className="profil-page">
      <Navigation />
      <Navigation2 />
      {responseCallsApi}
    </div>
  );
};

/**
 * Allow to return state as such props
 * @param {object} state
 * @returns response API
 */

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activity: state.activity,
    average: state.average,
    performance: state.performance,
  };
};

/**
 * ALlow to dispatch an action (with redux) and return function as such props
 * @param {function} dispatch
 * @returns state each data of API
 */

const mapDispatchToProps = (dispatch) => {
  return {
    getDataUser: (id) => dispatch(apiCallUser(id)),
    getDataActivity: (id) => dispatch(apiCallActivity(id)),
    getDataAverage: (id) => dispatch(apiCallAvarage(id)),
    getDataPerformance: (id) => dispatch(apiCallPerformance(id)),
  };
};

ProfilContainer.propTypes = {
  id: Proptypes.string.isRequired,
  user: Proptypes.object.isRequired,
  activity: Proptypes.object.isRequired,
  average: Proptypes.object.isRequired,
  performance: Proptypes.object.isRequired,
  getDataUser: Proptypes.func.isRequired,
  getDataActivity: Proptypes.func.isRequired,
  getDataAverage: Proptypes.func.isRequired,
  getDataPerformance: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilContainer);
