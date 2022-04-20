import React, { useState } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/form";
import "uig-webcomponents/lib/components/form/styles.css";
import "uig-webcomponents/lib/components/form-grid";
import "uig-webcomponents/lib/components/form-message";
import "vl-ui-form-message/dist/style.css";

const Input = ({ error, errorMessage, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        data-vl-block
        is="vl-input-field"
        data-vl-error={error ? true : null}
      />
      {error && (
        <p is="vl-form-validation-message" data-vl-error>
          {errorMessage || "Error message"}
        </p>
      )}
    </>
  );
};

const Label = ({ label, annotation, ...rest }) => {
  return (
    <label is="vl-form-label" data-vl-block {...rest}>
      {label}
      {annotation && <span is="vl-form-annotation-span">(verplicht)</span>}
    </label>
  );
};

const FormView = () => {
  const [isError, setIsError] = useState(false);

  return (
    <Page title="Form">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <button onClick={() => setIsError(!isError)} is="vl-button">
            Toggle error state
          </button>
        </div>
        <div is="vl-column" data-vl-size="12">
          <form is="vl-form">
            <div is="vl-form-group">
              <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column" data-vl-size="3">
                  <Label for="name" label="Naam " annotation="(verplicht)" />
                </div>
                <div is="vl-form-column" data-vl-size="9">
                  <Input error={isError} name="name" autocomplete="name" />
                </div>
                <div is="vl-form-column" data-vl-size="3">
                  <Label
                    for="firstname"
                    label="Voornaam "
                    annotation="(verplicht)"
                  />
                </div>
                <div is="vl-form-column" data-vl-size="9">
                  <Input
                    error={isError}
                    name="firstname"
                    autocomplete="firstname"
                  />
                </div>
                <div is="vl-form-column" data-vl-size="12">
                  <vl-checkboxx
                    data-vl-error={isError ? true : null}
                    data-vl-label="Ik voer stedenbouwkundige handelingen uit aan een bedrijfswoning die deel uitmaakt van dit bedrijfsgebouw"
                  ></vl-checkboxx>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default FormView;
