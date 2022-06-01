/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import "uig-webcomponents/lib/components/map";
import "./locationButton";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Circle, Fill, Style, Text } from "ol/style";
import Select from "ol/interaction/Select";
import { pointerMove } from "ol/events/condition";
import Control from "ol/control/Control";

const HybridMap = () => {
  const mapRef = useRef();
  const [map, setMap] = useState();
  const [features, setFeatures] = useState([
    new Feature({
      geometry: new Point([210000, 190000]),
    }),
  ]);
  const [featuresLayer, setFeaturesLayer] = useState(
    new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Circle({
          fill: new Fill({
            color: "#AD3E00",
          }),
          radius: 11,
        }),
        text: new Text({
          font: "bold 14px Flanders Art Sans,sans-serif",
          fill: new Fill({ color: "#fff" }),
          text: "B",
        }),
      }),
    })
  );

  const selected = new Style({
    image: new Circle({
      fill: new Fill({
        color: "#AD3E00",
      }),
      radius: 11,
    }),
    text: new Text({
      font: "bold 14px Flanders Art Sans,sans-serif",
      fill: new Fill({ color: "#fff" }),
    }),
  });

  useEffect(() => {
    const map = mapRef.current.map;
    const buttonEl = document.createElement("location-button");
    map.addInteraction(
      new Select({
        style: () => {
          selected.getText().setText("Selected!");
          return selected;
        },
      })
    );
    map.addInteraction(
      new Select({
        style: () => {
          selected.getText().setText("Hover!");
          return selected;
        },
        condition: pointerMove,
      })
    );
    map.addLayer(
      new VectorLayer({
        source: new VectorSource(),
        features: features,
      })
    );
    map.addControl(new Control({ element: buttonEl }));
    setMap(map);
  }, [mapRef]);

  useEffect(() => {
    if (features.length > 0 && map) {
      featuresLayer.setSource(
        new VectorSource({
          features: features,
        })
      );

      map.getView().fit(featuresLayer.getSource().getExtent(), {
        maxZoom: 8,
      });
    }
  }, [features, map]);

  return (
    <vl-map ref={mapRef}>
      <vl-map-overview-map></vl-map-overview-map>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
  );
};

export default HybridMap;
