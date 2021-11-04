import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SelectView from "./views/SelectView";
import ProgressBarView from "./views/ProgressBarView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/select">
          <SelectView />
        </Route>
        <Route path="/progress-bar">
          <ProgressBarView />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
