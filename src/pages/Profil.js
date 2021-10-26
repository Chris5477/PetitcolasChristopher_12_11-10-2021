import Navigation from "../components/Navigation";
import Header from "../components/Header";
import GraphBarChart from "../components/GraphBarChart";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../mock/mock_data";
import "../styles/profil.css";
import Navigation2 from "../components/Navigation2";
import ContainerGraphs from "../components/ContainerGraphs";
import AllCards from "../components/AllCard";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Profil = () => {

  return (
    <Provider store={store}>
      <div className="profil-page">
        <Navigation />
        <Navigation2 />
        <Header userData={USER_MAIN_DATA} />
        <GraphBarChart />
        <ContainerGraphs average={USER_AVERAGE_SESSIONS} performance={USER_PERFORMANCE} userData={USER_MAIN_DATA} />
        <AllCards userData={USER_MAIN_DATA} />
      </div>
    </Provider>
  );
};

export default Profil;
