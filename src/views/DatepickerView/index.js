import React from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/legacy/datepicker";
import SectionWrap from "../../components/SectionWrap";

const DatepickerView = () => {
  return (
    <Page title="Datepicker">
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Datepicker</h2>
        </div>
        <div is="vl-column">
          <vl-datepicker></vl-datepicker>
        </div>
        <div is="vl-column">
          <h2 is="vl-h2">Timepicker</h2>
        </div>
        <div is="vl-column">
          <vl-datepicker data-vl-type="time" data-vl-format="H:i"></vl-datepicker>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default DatepickerView;
