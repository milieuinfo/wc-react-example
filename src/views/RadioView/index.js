import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/legacy/radio";

const RadioView = () => {
  return (
    <Page title="Radio & Radio Group">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <vl-radio
            data-vl-label="Ja"
            data-vl-value="yes"
            data-vl-name="group-0"
          ></vl-radio>
          <vl-radio
            data-vl-label="Nee"
            data-vl-value="no"
            data-vl-name="group-0"
          ></vl-radio>
        </div>
      </SectionWrap>
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <vl-radio-group>
            <vl-radio data-vl-label="Ja" data-vl-value="yes"></vl-radio>
            <vl-radio data-vl-label="Nee" data-vl-value="no"></vl-radio>
          </vl-radio-group>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default RadioView;
