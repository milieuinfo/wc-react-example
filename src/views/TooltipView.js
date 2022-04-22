import React from "react";
import "uig-webcomponents/lib/components/tooltip";
import "uig-webcomponents/lib/components/tooltip/styles.css";
import Page from "../components/Page";
import SectionWrap from "../components/SectionWrap";

const TooltipView = () => {
  return (
    <Page title="Tooltip">
      <SectionWrap>
        <div>
          <button is="vl-button">
            <vl-tooltip data-vl-placement="bottom">yolo</vl-tooltip>
            Tooltip
          </button>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default TooltipView;
