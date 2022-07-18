import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgressBarView from "./views/ProgressBarView";
import MapView from "./views/MapView";
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
import AccordionView from "./views/AccordionView";
import LinkView from "./views/LinkView";
import ToasterView from "./views/ToasterView";
import InfotextView from "./views/InfotextView";
import TextareaView from "./views/TextareaView";
import StepsView from "./views/StepsView";
import MultiSelectView from "./views/MultiSelectView";
import RichDataView from "./views/RichDataView";
import RichDataTableView from "./views/RichDataTableView";

// lazy load some views as a test
const Landing = lazy(() => import("./views/Landing"));
const SelectView = lazy(() => import("./views/SelectView"));
const FormView = lazy(() => import("./views/FormView"));
const TooltipView = lazy(() => import("./views/TooltipView"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <Switch>
          <Route path="/richdatatable">
            <RichDataTableView />
          </Route>
          <Route path="/richdata">
            <RichDataView />
          </Route>
          <Route path="/multiselect">
            <MultiSelectView />
          </Route>
          <Route path="/steps">
            <StepsView />
          </Route>
          <Route path="/textarea">
            <TextareaView />
          </Route>
          <Route path="/infotext">
            <InfotextView />
          </Route>
          <Route path="/toaster">
            <ToasterView />
          </Route>
          <Route path="/map">
            <MapView />
          </Route>
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
          <Route path="/form">
            <FormView />
          </Route>
          <Route path="/tooltip">
            <TooltipView />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
