import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SelectView from "./views/SelectView";
import ProgressBarView from "./views/ProgressBarView";
import MapView from "./views/MapView";
import AccordionView from "./views/AccordionView";
import WizardView from "./views/WizardView";
import CheckboxView from "./views/CheckboxView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/accordion">
          <AccordionView />
        </Route>
        <Route exact path="/select">
          <SelectView />
        </Route>
        <Route exact path="/progress-bar">
          <ProgressBarView />
        </Route>
        <Route exact path="/map">
          <MapView />
        </Route>
        <Route exact path="/wizard">
          <WizardView />
        </Route>
        <Route exact path="/checkbox">
          <CheckboxView />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
