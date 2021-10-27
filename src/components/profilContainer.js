import Navigation from "../components/Navigation";
import Navigation2 from "../components/Navigation2";
import Header from "../components/Header";
import GraphBarChart from "../components/GraphBarChart";
import "../styles/profil.css";
import ContainerGraphs from "../components/ContainerGraphs";
import AllCards from "../components/AllCard";
import { useEffect } from "react";
import { connect } from "react-redux";
import { apiCallAvarage } from "../redux/dataAverage/actionDataAverage";
import { apiCallUser } from "../redux/dataUser/actionDataUser";
import { apiCallActivity } from "../redux/dataActivity/actionDataActivity";
import { apiCallPerformance } from "../redux/dataPerformance/actionDataPerformance";

const ProfilContainer = ({user, getDataUser , activity, getDataActivity, average, getDataAverage, performance, getDataPerformance}) => {

 

  useEffect(() => {
    getDataUser(18)
    getDataActivity(18)
    getDataAverage(18)
    getDataPerformance(18)
    
  },[])
  
 
    const aaa = user.isLoading ? <div className="spinner">HELLO</div> : user.error ? <p>ERROR</p> : user.user &&
<Header user={user} />

    const bbb = activity.isLoading ? <div className="spinner">HELLO</div> : activity.error ? <p>ERROR</p> : activity.activity &&
<GraphBarChart activity={activity} />

    const xxx = user.isLoading ? <div className="spinner">HELLO</div> : user.error ? <p>ERROR</p> : user.user &&
    <AllCards user={user} />



  return (
    
      <div className="profil-page">
        <Navigation />
        <Navigation2 />
          {aaa}
          {bbb}
        <ContainerGraphs user={user} average={average} performance={performance} />
        {xxx}
        
      </div>

  );
};

const mapStateToProps = state => {
  return{
    user : state.user,
    activity : state.activity,
    average : state.average,
    performance : state.performance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataUser : (id) => dispatch(apiCallUser(id)),
    getDataActivity : (id) => dispatch(apiCallActivity(id)),
    getDataAverage : (id) => dispatch(apiCallAvarage(id)),
    getDataPerformance : (id) => dispatch(apiCallPerformance(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProfilContainer);

