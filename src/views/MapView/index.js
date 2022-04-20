import React, { useEffect, useRef } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/map";

const MapView = () => {
  const featureRef = useRef();

  useEffect(() => {
    featureRef.current.features = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          id: 1,
          geometry: { type: "Point", coordinates: [210000, 190000] },
        },
        {
          type: "Feature",
          id: 2,
          geometry: {
            type: "LineString",
            coordinates: [
              [170000, 170000],
              [150000, 206000],
            ],
          },
        },
        {
          type: "Feature",
          id: 3,
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [44000, 171000],
                [100000, 171000],
                [100000, 205000],
                [44000, 205000],
                [44000, 171000],
              ],
            ],
          },
        },
      ],
    };
  }, []);

  return (
    <Page title="Map">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <vl-map>
            <vl-map-overview-map />
            <vl-map-baselayer-grb-gray />
            <vl-map-baselayer-grb />
            <vl-map-baselayer-grb-ortho />
          </vl-map>
        </div>
        <div is="vl-column" data-vl-size="12">
          <vl-map>
            <vl-map-baselayer-grb-gray />
            <vl-map-features-layer ref={featureRef} />
          </vl-map>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MapView;
