import React, { useState, useRef, useEffect } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/checkbox";

const CheckboxView = () => {
  const [checked, setChecked] = useState(true);
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.addEventListener("change", (event) =>
      setChecked(event.target.checked)
    );
  }, []);

  return (
    <Page title="Checkbox">
      <SectionWrap>
        <div is="vl-column">
          <button is="vl-button" onClick={() => setChecked(!checked)}>
            Toggle checkbox
          </button>
        </div>
        <div is="vl-column">
          <vl-checkbox
            ref={checkboxRef}
            checked={checked ? true : null}
            data-vl-label="My checkbox"
          ></vl-checkbox>
        </div>
        <div is="vl-column">
          Checkbox is {checked ? "checked" : "not checked"}
        </div>
      </SectionWrap>
    </Page>
  );
};

export default CheckboxView;
