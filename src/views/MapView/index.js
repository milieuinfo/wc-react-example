/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/map";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import XYZ from "ol/source/XYZ";
import { Circle, Fill, Style, Text } from "ol/style";
import Select from "ol/interaction/Select";
import { pointerMove } from "ol/events/condition";
import HybridMap from "./HybridMap";

const MapView = () => {
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
      text: "Selected!",
    }),
  });

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
          }),
        }),
        featuresLayer,
      ],
      target: mapRef.current,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    map.addInteraction(new Select({ style: () => selected }));
    map.addInteraction(
      new Select({ style: () => selected, condition: pointerMove })
    );

    setMap(map);
  }, []);

  useEffect(() => {
    if (features.length > 0 && map) {
      featuresLayer.setSource(
        new VectorSource({
          features: features,
        })
      );

      // map.getView().fit(featuresLayer.getSource().getExtent(), {
      //   padding: [100, 100, 100, 100],
      // });
    }
  }, [features, map]);

  return (
    <Page title="Map">
      <SectionWrap>
        {/* <div is="vl-column" data-vl-size="12">
          <div style={{ width: "100%", height: "500px" }} ref={mapRef}></div>
        </div> */}
        <div is="vl-column" data-vl-size="12">
          <HybridMap></HybridMap>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MapView;
