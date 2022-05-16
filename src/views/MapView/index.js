import React, { useEffect, useRef } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/map";
import FeaturesLayer from "./FeaturesLayer";
import Select from "ol/interaction/Select";
import OlStyle from "ol/style/Style";
import OlStyleStroke from "ol/style/Stroke";
import OlStyleFill from "ol/style/Fill";
import {
  altKeyOnly,
  click,
  pointerMove,
  singleClick,
} from "ol/events/condition";
import OlStyleCircle from "ol/style/Circle";
import OlStyleText from "ol/style/Text";

const types = {
  o: {
    id: 1,
    style: new OlStyle({
      image: new OlStyleCircle({
        fill: new OlStyleFill({
          color: "#003B8E",
        }),
        radius: 11,
      }),
      text: new OlStyleText({
        font: "bold 14px Flanders Art Sans,sans-serif",
        fill: new OlStyleFill({ color: "#fff" }),
        text: "O",
      }),
    }),
  },
  b: {
    id: 2,
    style: new OlStyle({
      image: new OlStyleCircle({
        fill: new OlStyleFill({
          color: "#AD3E00",
        }),
        radius: 11,
      }),
      text: new OlStyleText({
        font: "bold 14px Flanders Art Sans,sans-serif",
        fill: new OlStyleFill({ color: "#fff" }),
        text: "B",
      }),
    }),
  },
};

const MapView = () => {
  const mapRef = useRef();
  const layerRef = useRef();
  const selectActionRef = useRef();

  useEffect(() => {
    layerRef.current.layer
      .getSource()
      .getFeatures()
      .forEach((feature) => {
        const { typeId } = feature.getProperties();
        feature.setStyle(typeId === types.o.id ? types.o.style : types.b.style);
      });
  }, [layerRef]);

  const geojsonObject = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          typeId: types.o.id,
        },
        geometry: {
          type: "Point",
          coordinates: [149055.0, 199908.0],
        },
      },
      {
        type: "Feature",
        properties: {
          typeId: types.b.id,
        },
        geometry: {
          type: "Point",
          coordinates: [151055.0, 201908.0],
        },
      },
    ],
  };

  // useEffect(() => {
  //   selectActionRef.current.style = new OlStyle({
  //     image: new OlStyleCircle({
  //       fill: new OlStyleFill({
  //         color: "#AD3E00",
  //       }),
  //       radius: 11,
  //     }),
  //     text: new OlStyleText({
  //       font: "bold 14px Flanders Art Sans,sans-serif",
  //       fill: new OlStyleFill({ color: "#fff" }),
  //       text: "Selected",
  //     }),
  //   });
  // }, [selectActionRef]);

  return (
    <Page title="Map">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <vl-map ref={mapRef}>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
            <FeaturesLayer
              ref={layerRef}
              features={geojsonObject}
            ></FeaturesLayer>
          </vl-map>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MapView;
