import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/legacy/modal";

const ModalView = () => {
  return (
    <Page title="Modal">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <button
            id="button-open-modal"
            is="vl-button"
            data-vl-modal-open="modal"
          >
            Open
          </button>
          <vl-modal id="modal" data-vl-title="Modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <button is="vl-button" slot="button">
              Start aanvraag
            </button>
          </vl-modal>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default ModalView;
