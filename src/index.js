import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './pages/Profil';
import Error from "./pages/Error"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./styles/global.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profil}></Route>

        <Route component={Error}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
