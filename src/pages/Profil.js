import "../styles/profil.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ProfilContainer from "../components/ProfilContainer";

const Profil = (props) => {
  const idProfil = props.match.params.id;

  return (
    <Provider store={store}>
      <ProfilContainer id={idProfil} />
    </Provider>
  );
};

export default Profil;
