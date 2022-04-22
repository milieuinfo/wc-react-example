/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";

const ButtonView = () => {
  return (
    <Page title="Button">
      <SectionWrap>
        <div is="vl-column">
          <button is="vl-button">Button</button>
        </div>
        <div is="vl-column">
          <a is="vl-link-button" href="#">
            Link button
          </a>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default ButtonView;
