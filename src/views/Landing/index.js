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
        <Doormat href="/checkbox" title="vl-checkbox" />
        <Doormat href="/cookie-consent" title="vl-cookie-consent" />
        <Doormat href="/http-error-message" title="vl-http-error-message" />
        <Doormat href="/info-tile" title="vl-info-tile" />
        <Doormat href="/map" title="vl-map" />
        <Doormat href="/modal" title="vl-modal" />
        <Doormat href="/progress-bar" title="vl-progress-bar" />
        <Doormat href="/radio" title="vl-radio & vl-radio-group" />
        <Doormat href="/select" title="vl-select" />
        <Doormat href="/tabs" title="vl-tabs" />
        <Doormat href="/upload" title="vl-upload" />
        <Doormat href="/wizard" title="vl-wizard" />
      </SectionWrap>
    </Page>
  );
};

export default Landing;
