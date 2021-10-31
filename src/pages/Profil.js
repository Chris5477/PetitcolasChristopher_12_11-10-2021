import "../styles/profil.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ProfilContainer from "../components/ProfilContainer";
import Proptypes from "prop-types";

const Profil = ({ match }) => {
  const idProfil = match.params.id;

  return (
    <Provider store={store}>
      <ProfilContainer id={idProfil} />
    </Provider>
  );
};

Profil.propTypes = {
  match: Proptypes.object.isRequired,
};

export default Profil;
