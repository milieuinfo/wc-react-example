import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SelectView from "./views/SelectView";
import ProgressBarView from "./views/ProgressBarView";
import MapView from "./views/MapView";
import AccordionView from "./views/AccordionView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/accordion">
          <AccordionView />
        </Route>
        <Route path="/select">
          <SelectView />
        </Route>
        <Route path="/progress-bar">
          <ProgressBarView />
        </Route>
        <Route path="/map">
          <MapView />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
