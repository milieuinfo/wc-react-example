/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/legacy/cookie-consent";

const CookieConsentView = () => {
  return (
    <Page title="Cookie consent">
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Example 1</h2>
        </div>
        <div is="vl-column">
          <vl-cookie-consent
            id="cookie-consent"
            data-vl-auto-open-disabled=""
          ></vl-cookie-consent>
          <button
            id="button-open-cookie-consent"
            is="vl-button"
            onclick="document.querySelector('#cookie-consent').open();"
          >
            Open cookie-consent
          </button>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Example 2</h2>
        </div>
        <div is="vl-column">
        <vl-cookie-consent id="cookie-consent-with-extra-opt-in" data-vl-auto-open-disabled="">
          <vl-cookie-consent-opt-in id="socialmedia" data-vl-label="Sociale media" data-vl-description="Beschrijving van de sociale media cookies."></vl-cookie-consent-opt-in>
        </vl-cookie-consent>
        <button id="button-open-cookie-consent-with-extra-opt-in" is="vl-button" onclick="document.querySelector('#cookie-consent-with-extra-opt-in').open();">
          Open cookie-consent
        </button>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default CookieConsentView;
