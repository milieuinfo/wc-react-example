import React, { useState, useRef, useEffect } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/progress-bar";

const SelectView = () => {
  const progressBarRef = useRef();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    progressBarRef.current.steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
    progressBarRef.current.addEventListener("vl-click-step", (event) =>
      setActiveStep(event.detail.number)
    );
  }, []);

  return (
    <Page title="Progress bar">
      <SectionWrap>
        <div is="vl-column">
          <vl-progress-bar
            ref={progressBarRef}
            data-vl-active-step={activeStep}
            data-vl-numeric
          ></vl-progress-bar>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div is="vl-column">
          <p>Active step: {activeStep}</p>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default SelectView;
