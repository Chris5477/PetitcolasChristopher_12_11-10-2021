//import of all my dependencies
import Navigation from "../components/Navigation";
import Header from "../components/Header"
import GraphBarChart from "../components/GraphBarChart";
// import Content from "../components/Content";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../mock/mock_data";
import "../styles/profil.css"
import Navigation2 from "../components/Navigation2";
import ContainerGraphs from "../components/ContainerGraphs";
import AllCards from "../components/AllCard";



// I CREATE A SMART COMPONENT , HE WILL TRANSMIT ALL DATAS TO THESES CHILDRENS
const Profil = () => {


  return (
    //BUILD COMPONENT
    // <CONTENT /> SEND PROPS ON THESE DESCENDING
    <div className="profil-page">
      <Navigation />
      <Navigation2 />
      <Header userData={USER_MAIN_DATA}/>
      <GraphBarChart activityData={USER_ACTIVITY} />
      <ContainerGraphs average={USER_AVERAGE_SESSIONS} performance={USER_PERFORMANCE} userData={USER_MAIN_DATA}/> 
      <AllCards userData={USER_MAIN_DATA}/>
      {/* <Content userData={USER_MAIN_DATA} activityData={USER_ACTIVITY} performance={USER_PERFORMANCE} average={USER_AVERAGE_SESSIONS} /> */}
    </div>
  );
};

export default Profil;
