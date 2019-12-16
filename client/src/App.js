import React from "react";
import { Route, Switch } from "react-router-dom";
import "./components/Global.css";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Students from "./components/students/Students";
import Groups from "./components/groups/Groups";
import Cohorts from './components/cohorts/Cohorts';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/cohorts" component={Cohorts} />
        <Route exact path="/groups" component={Groups} />
      </Switch>
    </>
  );
};

export default App;
