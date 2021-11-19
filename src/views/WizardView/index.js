import React, { useRef, useEffect, useState } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/wizard";

const WizardView = () => {
  const wizardElement = useRef();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    wizardElement.current.addEventListener("vl-click-step", (event) =>
      setActiveStep(event.detail.number)
    );
  });

  return (
    <Page title="Wizard">
      <SectionWrap>
        <div is="vl-column">
          <vl-wizard data-vl-active-step={activeStep} ref={wizardElement}>
            <h2 slot="title" is="vl-h2">
              Wizard title
            </h2>
            <p slot="header">You're a wizard Harry</p>
            <vl-wizard-pane data-vl-name="Stap 1">
              <h3 is="vl-h3">Stap 1</h3>
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="12">
                      <label is="vl-form-label" for="naam" data-vl-block>
                        Naam
                      </label>
                      <input id="naam" is="vl-input-field" data-vl-block />
                    </div>
                  </div>
                </div>
                <div is="vl-column">
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    is="vl-button"
                    type="button"
                  >
                    Volgende
                  </button>
                </div>
              </div>
            </vl-wizard-pane>
            <vl-wizard-pane data-vl-name="Stap 2">
              <h3 is="vl-h3">Stap 2</h3>
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <div is="vl-form-grid" data-vl-is-stacked>
                    <div is="vl-form-column" data-vl-size="12">
                      <label is="vl-form-label" for="years" data-vl-block>
                        Aantal jaren dienst
                      </label>
                      <input id="years" is="vl-input-field" data-vl-block />
                    </div>
                  </div>
                </div>
                <div is="vl-column">
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    is="vl-button-link"
                    type="button"
                  >
                    <span
                      is="vl-icon"
                      data-vl-icon="arrow-left-fat"
                      data-vl-before
                    ></span>
                    Vorige
                  </button>
                </div>
              </div>
            </vl-wizard-pane>
          </vl-wizard>
        </div>
        <div is="vl-column">
          <p>Active step: {activeStep}</p>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default WizardView;
