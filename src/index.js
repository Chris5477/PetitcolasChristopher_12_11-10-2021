import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './pages/Profil';
import User from "./pages/User";
import Activity from "./pages/Activity"
import AverageSession from "./pages/AverageSession";
import DailyScore from "./pages/DailyScore";
import AllActivities from "./pages/AllActivities";
import Mykeys from "./pages/MyKeys";
import Error from "./pages/Error"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import "./styles/global.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profil}></Route>
        {/* <Route path="/user/:id" component={User}></Route> */}
        {/* <Route path="/user/:id/activity" component={Activity}></Route>
        <Route path="/user/:id/average-sessions" component={AverageSession}></Route>
        <Route path="user/:id/daily-score" component={DailyScore}></Route>
        <Route path="user/:id/activities" component={AllActivities}></Route>
        <Route path="user/:id/key-data" component={Mykeys}></Route> */}
        <Route component={Error}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
