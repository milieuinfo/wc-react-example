import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import Doormat from "../../components/Doormat";

const Landing = () => {
  return (
    <Page title="Components">
      <SectionWrap>
        <Doormat href="/accordion" title="vl-accordion" />
        <Doormat href="/map" title="vl-map" />
        <Doormat href="/progress-bar" title="vl-progress-bar" />
        <Doormat href="/select" title="vl-select" />
        <Doormat href="/wizard" title="vl-wizard" />
        <Doormat href="/checkbox" title="vl-checkbox" />
        <Doormat href="/upload" title="vl-upload" />
        <Doormat href="/cookie-consent" title="vl-cookie-consent" />
        <Doormat href="/breadcrumb" title="vl-breadcrumb" />
      </SectionWrap>
    </Page>
  );
};

export default Landing;
