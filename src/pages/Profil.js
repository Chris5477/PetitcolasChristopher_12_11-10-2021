import Navigation from "../components/Navigation";
import Header from "../components/Header";
import GraphBarChart from "../components/GraphBarChart";
import "../styles/profil.css";
import Navigation2 from "../components/Navigation2";
import ContainerGraphs from "../components/ContainerGraphs";
import AllCards from "../components/AllCard";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { USER_MAIN_DATA } from "../mock/mock_data";

const Profil = () => {

  return (
    <Provider store={store}>
      <div className="profil-page">
        <Navigation />
        <Navigation2 />
        <Header/>
        <GraphBarChart />
        <ContainerGraphs />
        <AllCards userData={USER_MAIN_DATA} />
      </div>
    </Provider>
  );
};

export default Profil;
