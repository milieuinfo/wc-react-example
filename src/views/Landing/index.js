import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import Doormat from "../../components/Doormat";

const Landing = () => {
  return (
    <Page title="Components">
      <SectionWrap>
        <Doormat href="/accordion" title="vl-accordion" />
        <Doormat href="/breadcrumb" title="vl-breadcrumb" />
        <Doormat href="/button" title="vl-button" />
        <Doormat href="/checkbox" title="vl-checkbox" />
        <Doormat href="/cookie-consent" title="vl-cookie-consent" />
        <Doormat href="/datepicker" title="vl-datepicker" />
        <Doormat href="/http-error-message" title="vl-http-error-message" />
        <Doormat href="/infotext" title="vl-infotext" />
        <Doormat href="/info-tile" title="vl-info-tile" />
        <Doormat href="/link" title="vl-link" />
        <Doormat href="/map" title="vl-map" />
        <Doormat href="/modal" title="vl-modal" />
        <Doormat href="/progress-bar" title="vl-progress-bar" />
        <Doormat href="/radio" title="vl-radio" />
        <Doormat href="/select" title="vl-select" />
        <Doormat href="/steps" title="vl-steps" />
        <Doormat href="/tabs" title="vl-tabs" />
        <Doormat href="/textarea" title="vl-textarea" />
        <Doormat href="/toaster" title="vl-toaster" />
        <Doormat href="/upload" title="vl-upload" />
        <Doormat href="/wizard" title="vl-wizard" />
        <Doormat href="/form" title="vl-form" />
        <Doormat href="/multiselect" title="vl-multiselect" />
        <Doormat href="/richdata" title="vl-rich-data" />
        <Doormat href="/richdatatable" title="vl-rich-data-table" />
      </SectionWrap>
    </Page>
  );
};

export default Landing;
