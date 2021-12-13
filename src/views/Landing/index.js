import React from "react";
import Page from "../../components/Page";
import "vl-ui-doormat";
import "vl-ui-doormat/dist/style.css";
import SectionWrap from "../../components/SectionWrap";

const Doormat = ({ href, title }) => (
  <div is="vl-column">
    <a is="vl-doormat" href={href}>
      <h2 is="vl-doormat-title">{title}</h2>
    </a>
  </div>
);

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
      </SectionWrap>
    </Page>
  );
};

export default Landing;
