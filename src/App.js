import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SelectView from "./views/SelectView";
import ProgressBarView from "./views/ProgressBarView";
import MapView from "./views/MapView";
import AccordionView from "./views/AccordionView";
import WizardView from "./views/WizardView";
import CheckboxView from "./views/CheckboxView";
import UploadView from "./views/UploadView";
import BreadcrumbView from "./views/BreadcrumbView";
// import CookieConsentView from "./views/CookieConsentView";

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
        <Route path="/wizard">
          <WizardView />
        </Route>
        <Route path="/checkbox">
          <CheckboxView />
        </Route>
        <Route path="/upload">
          <UploadView />
        </Route>
        <Route path="/breadcrumb">
          <BreadcrumbView />
        </Route>
        <Route path="/cookie-consent">{/* <CookieConsentView /> */}</Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
