import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/http-error-message";

const HttpErrorMessageView = () => {
  return (
    <Page title="Http error message">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <vl-http-error-message
            data-vl-title="Niets gevonden hiervoor."
            data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg"
            data-vl-image-alt="Niets gevonden"
          >
            <p slot="text">Sorry, er liep iets onverwachts mis.</p>
            <div slot="actions">
              <a is="vl-link-button" href="#">
                Opnieuw opstarten
              </a>
            </div>
          </vl-http-error-message>
        </div>
      </SectionWrap>
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <vl-http-405-message></vl-http-405-message>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default HttpErrorMessageView;
