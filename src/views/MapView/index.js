import React, { useEffect, useRef, useState } from "react";
import "uig-webcomponents/lib/components/map";
import { features } from "./features";
import SideSheet from "./SideSheet";

const purple = "rgba(102, 51, 153, 0.6)";

const MapView = () => {
  const mapRef = useRef();
  const featureRef = useRef();
  const [actions, setActions] = useState({
    modify: { name: "modify", ref: useRef(), isActive: false },
    measure: { name: "measure", ref: useRef(), isActive: false },
    delete: { name: "delete", ref: useRef(), isActive: false },
    drawPoint: { name: "draw-point", ref: useRef(), isActive: false },
    drawLine: { name: "draw-line", ref: useRef(), isActive: false },
    drawPolygon: { name: "draw-polygon", ref: useRef(), isActive: false },
    select: { name: "select", ref: useRef(), isActive: false },
  });

  const updateAction = (name, value) => {
    setActions({ ...actions, [name]: { ...actions[name], isActive: value } });
  };

  useEffect(() => {
    actions.measure.ref.current.active = actions.measure.isActive;
  }, [actions.measure]);

  useEffect(() => {
    console.log("actions changed", { actions });
  }, [actions]);

  useEffect(() => {
    mapRef.current.addEventListener(
      "vl-active-action-changed",
      ({ detail }) => {
        // const prevAction =
        //   detail.previous && detail.previous.getAttribute("data-action");
        // prevAction && updateAction(prevAction, false);
      }
    );
    mapRef.current.addEventListener("vl-layer-visible-changed", (event) => {
      // handleLayerVisibleChange(event);
    });
    featureRef.current.features = features;
  }, []);

  return (
    <vl-map ref={mapRef}>
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>
      <SideSheet updateAction={updateAction} actions={actions} />
      <vl-map-overview-map></vl-map-overview-map>
      <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      <vl-map-baselayer-grb></vl-map-baselayer-grb>
      <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
      <vl-map-features-layer data-vl-name="Shapes" ref={featureRef}>
        <vl-map-layer-style
          data-vl-border-color={purple}
          data-vl-color={purple}
        ></vl-map-layer-style>
        <vl-map-layer-circle-style
          data-vl-border-color={purple}
          data-vl-color={purple}
        ></vl-map-layer-circle-style>
        <vl-map-draw-point-action
          data-action="draw-point"
          ref={actions.drawPoint.ref}
        ></vl-map-draw-point-action>
        <vl-map-draw-line-action
          data-action="draw-line"
          ref={actions.drawLine.ref}
        ></vl-map-draw-line-action>
        <vl-map-draw-polygon-action
          data-action="draw-polygon"
          ref={actions.drawPolygon.ref}
        ></vl-map-draw-polygon-action>
        <vl-map-modify-action
          data-action="modify"
          ref={actions.modify.ref}
        ></vl-map-modify-action>
        <vl-map-delete-action
          data-action="delete"
          ref={actions.delete.ref}
        ></vl-map-delete-action>
        <vl-map-select-action
          data-action="select"
          ref={actions.select.ref}
          data-vl-default-active
        ></vl-map-select-action>
      </vl-map-features-layer>
      <vl-map-features-layer data-vl-name="Measurements">
        <vl-map-measure-action
          data-action="measure"
          ref={actions.measure.ref}
        ></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  );
};

export default MapView;
