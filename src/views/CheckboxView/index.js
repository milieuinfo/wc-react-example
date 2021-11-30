import React, { useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/checkbox";
// import "carbon-web-components/es/components/checkbox/checkbox";

const CheckboxView = () => {
  const [checked, setChecked] = useState(true);
  const checkboxRef = useRef();

  // useEffect(() => {
  //   checkboxRef.current.checked = checked;
  // }, [checked]);

  // useEffect(() => {
  //   console.log({ checked: checkboxRef.current.checked });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [checkboxRef.current]);

  return (
    <Page title="Checkbox">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <vl-checkbox
            checked={checked}
            onClick={(event) => setChecked(event.target.value)}
            ref={checkboxRef}
            data-vl-label="Optie 1"
          ></vl-checkbox>
          <bx-checkbox checked={checked} label-text="Checkbox" />
        </div>
      </SectionWrap>
    </Page>
  );
};

export default CheckboxView;
