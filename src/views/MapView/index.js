import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import HybridMap from "./HybridMap";
import NativeMap from "./NativeMap";

const MapView = () => {
  return (
    <Page title="Map">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <HybridMap />
        </div>
        <div is="vl-column" data-vl-size="12">
          <NativeMap />
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MapView;
