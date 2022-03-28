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
            Open default
          </button>
          <vl-modal id="modal" data-vl-title="Modal">
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <button is="vl-button" slot="button">
              Start aanvraag
            </button>
          </vl-modal>
        </div>
        <div is="vl-column" data-vl-size="12">
          <button
            id="button-open-modal-cl-nc-li"
            is="vl-button"
            data-vl-modal-open="modal-cl-nc-li"
          >
            Open another action
          </button>
          <vl-modal
            id="modal-cl-nc-li"
            data-vl-title="Modal"
            data-vl-closable
            data-vl-not-cancellable
          >
            <span slot="content">Lorem ipsum dolor sit amet.</span>
            <button is="vl-button-link" slot="button">
              <span
                is="vl-icon"
                data-vl-icon="cross"
                before
                data-vl-modal-close
              ></span>
              Andere actie
            </button>
          </vl-modal>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default ModalView;
