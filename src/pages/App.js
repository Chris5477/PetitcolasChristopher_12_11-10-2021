import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profil from "./Profil";
import Error from "./Error";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil/:id" component={Profil} />
        <Route path="/signup"/>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
