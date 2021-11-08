import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/map";

const MapView = () => {
  return (
    <Page title="Map">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <vl-map id="map">
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
          </vl-map>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MapView;
