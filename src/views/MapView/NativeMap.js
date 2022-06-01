/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import "uig-webcomponents/lib/components/map";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import WMTSSource from "ol/source/WMTS";
import { Circle, Fill, Style, Text } from "ol/style";
import Select from "ol/interaction/Select";
import { pointerMove } from "ol/events/condition";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import * as olExtent from "ol/extent";
import Projection from "ol/proj/Projection";

const NativeMap = () => {
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
    const projection = new Projection({
      code: "EPSG:31370",
      extent: [9928, 66928, 272072, 329072],
      getPointResolution: (r) => r,
    });
    const size = olExtent.getWidth(projection.getExtent()) / 256;
    const resolutions = new Array(16);
    const matrixIds = new Array(16);
    for (let z = 0; z < 16; ++z) {
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }

    const map = new Map({
      layers: [
        new TileLayer({
          title: "Test title",
          type: "base",
          source: new WMTSSource({
            url: "https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts",
            layer: "omwrgbmrvl",
            matrixSet: "BPL72VL",
            format: "image/png",
            projection: "EPSG:31370",
            tileGrid: new WMTSTileGrid({
              extent: projection.getExtent(),
              origin: olExtent.getTopLeft(projection.getExtent()),
              resolutions: resolutions,
              matrixIds: matrixIds,
            }),
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
      //   maxZoom: 14,
      // });
    }
  }, [features, map]);

  return <div style={{ width: "100%", height: "500px" }} ref={mapRef}></div>;
};

export default NativeMap;
