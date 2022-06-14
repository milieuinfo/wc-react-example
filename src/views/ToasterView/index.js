import React, { useRef } from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/legacy/toaster";
import "uig-webcomponents/lib/legacy/toaster/styles.css";
import "uig-webcomponents/lib/components/alert";
import SectionWrap from "../../components/SectionWrap";

const ToasterView = () => {
  const successAlertRef = useRef();
  const warningAlertRef = useRef();
  const errorAlertRef = useRef();
  const ctaAlertRef = useRef();

  return (
    <Page title="Toaster">
      <SectionWrap>
        <div style={{ flex: 1 }}>
          <div id="demo-toaster" is="vl-toaster"></div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              id="demo-toaster-success-alert-button"
              is="vl-button"
              onClick={() => {
                document
                  .querySelector("#demo-toaster")
                  .push(successAlertRef.current.cloneNode(true));
              }}
            >
              Success
            </button>
            <button
              id="demo-toaster-warning-alert-button"
              is="vl-button"
              onClick={() => {
                document
                  .querySelector("#demo-toaster")
                  .push(warningAlertRef.current.cloneNode(true));
              }}
            >
              Warning
            </button>
            <button
              id="demo-toaster-error-alert-button"
              is="vl-button"
              onClick={() => {
                document
                  .querySelector("#demo-toaster")
                  .push(errorAlertRef.current.cloneNode(true));
              }}
            >
              Error
            </button>
            <button
              id="demo-toaster-cta-alert-button"
              is="vl-button"
              onClick={() => {
                document
                  .querySelector("#demo-toaster")
                  .push(ctaAlertRef.current.cloneNode(true));
              }}
            >
              Call of action
            </button>
          </div>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div style={{ flex: 1 }}>
          <vl-alert
            id="alert-1"
            ref={warningAlertRef}
            data-vl-type="warning"
            data-vl-icon="warning"
            data-vl-title="Technische storing"
            data-vl-closable
          >
            <p>
              Door een technische storing is dit loket tijdelijk niet
              beschikbaar.
            </p>
          </vl-alert>
          <br />
          <vl-alert
            id="alert-2"
            ref={errorAlertRef}
            data-vl-type="error"
            data-vl-icon="warning"
            data-vl-title="Error"
            data-vl-closable
          >
            <p>Er is een fout opgetreden.</p>
          </vl-alert>
          <br />
          <vl-alert
            id="alert-3"
            ref={successAlertRef}
            data-vl-type="success"
            data-vl-icon="check"
            data-vl-title="Gelukt"
            data-vl-closable
          >
            <p>
              Wij hebben uw melding goed ontvangen en nemen deze spoedig in
              behandeling.
            </p>
          </vl-alert>
          <br />
          <vl-alert
            id="alert-4"
            ref={ctaAlertRef}
            data-vl-type="cta"
            data-vl-icon="info"
            data-vl-title="Opgelet!"
            data-vl-closable
          >
            <p>
              U heeft geen rechten om deze actie uit te voeren.
              <a href="#">Vraag rechten aan</a>.
            </p>
            <button slot="actions" is="vl-button" id="b1">
              Fout melden
            </button>
          </vl-alert>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default ToasterView;
