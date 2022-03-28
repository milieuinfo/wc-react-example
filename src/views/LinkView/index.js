/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/link";
import "uig-webcomponents/lib/components/link/styles.css";

const LinkView = () => {
  return (
    <Page title="Link">
      <SectionWrap>
        <div is="vl-column">
          <a is="vl-link" href="#">
            Link
          </a>
        </div>
        <div is="vl-column">
          <button is="vl-button-link">Button link</button>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default LinkView;
