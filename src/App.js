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
import TabsView from "./views/TabsView";
import InfoTileView from "./views/InfoTileView";
import HttpErrorMessageView from "./views/HttpErrorMessageView";
import RadioView from "./views/RadioView";
import ModalView from "./views/ModalView";
import ButtonView from "./views/ButtonView";
import LinkView from "./views/LinkView";
// import CookieConsentView from "./views/CookieConsentView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/modal">
          <ModalView />
        </Route>
        <Route path="/radio">
          <RadioView />
        </Route>
        <Route path="/tabs">
          <TabsView />
        </Route>
        <Route path="/info-tile">
          <InfoTileView />
        </Route>
        <Route path="/http-error-message">
          <HttpErrorMessageView />
        </Route>
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
        <Route path="/button">
          <ButtonView />
        </Route>
        <Route path="/link">
          <LinkView />
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
