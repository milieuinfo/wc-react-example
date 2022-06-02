import React, { useEffect, useRef } from "react";
import "uig-webcomponents/lib/components/map";

const purple = "rgba(102, 51, 153, 0.6)";
const toggleGroupStyling = { width: "100%" };
const toggleItemStyling = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  marginBottom: "1rem",
};

const getActionElement = (name) =>
  document.getElementsByClassName(`${name}-action`)[0];
const getToggleButton = (name) =>
  document.getElementsByClassName(`${name}-toggle-button`)[0];

const actionIdentifiers = [
  "draw-point",
  "draw-line",
  "draw-polygon",
  "modify",
  "delete",
];

const MapView = () => {
  const mapRef = useRef();
  const featureRef = useRef();
  const defaultActiveActionRef = useRef();

  useEffect(() => {
    mapRef.current.addEventListener("vl-active-action-changed", (event) => {
      handleActiveActionChange(event);
    });

    mapRef.current.addEventListener("vl-layer-visible-changed", (event) => {
      handleLayerVisibleChange(event);
    });

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

  const handleActiveActionChange = ({ detail: { previous, current } }) => {
    // Activate/deactivate external controls when an action changes its state
    actionIdentifiers.forEach((actionIdentifier) => {
      if (previous === getActionElement(actionIdentifier)) {
        getToggleButton(actionIdentifier).active = false;
      } else if (current === getActionElement(actionIdentifier)) {
        getToggleButton(actionIdentifier).active = true;
      }
    });
  };

  const handleLayerVisibleChange = ({ detail: { layer, visible } }) => {
    // Enable/disable external controls when an action changes its state
    const layerActions = layer.getElementsByClassName("action");

    for (const layerAction of layerActions) {
      actionIdentifiers.forEach((actionIdentifier) => {
        if (layerAction === getActionElement(actionIdentifier)) {
          getToggleButton(actionIdentifier).disabled = !visible;
        }
      });
    }
  };

  return (
    <vl-map ref={mapRef}>
      <vl-map-action-controls>
        <vl-map-measure-control></vl-map-measure-control>
      </vl-map-action-controls>

      <vl-map-side-sheet>
        {/* <h6 is="vl-h6">Layers</h6>

        <vl-map-layer-switcher> </vl-map-layer-switcher>

        <hr /> */}

        <h6 is="vl-h6">Measure</h6>

        <div>
          <button
            is="vl-button"
            style={{ marginRight: "0.5rem" }}
            onClick={() => {
              getActionElement("measure").active = true;
            }}
          >
            Start
          </button>
          <button
            is="vl-button"
            onClick={() => {
              getActionElement("measure").active = false;
            }}
          >
            Stop
          </button>
        </div>

        <hr />

        <div style={toggleGroupStyling}>
          <h6 is="vl-h6">Shapes</h6>

          <div style={{ marginBottom: "2rem" }}>
            <vl-toggle-button
              class="modify-toggle-button"
              onClick={() => {
                getActionElement("modify").active =
                  !getToggleButton("modify").active;
              }}
            >
              Modify
            </vl-toggle-button>
            <vl-toggle-button
              class="delete-toggle-button"
              onClick={() => {
                getActionElement("delete").active =
                  !getToggleButton("delete").active;
              }}
            >
              Delete
            </vl-toggle-button>
          </div>

          <div style={toggleItemStyling}>
            <vl-toggle-button
              class="draw-point-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              onClick={() => {
                getActionElement("draw-point").active =
                  !getToggleButton("draw-point").active;
              }}
            >
              Toggle draw point action
            </vl-toggle-button>
            <p>Draw point</p>
          </div>

          <div style={toggleItemStyling}>
            <vl-toggle-button
              class="draw-line-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              onClick={() => {
                getActionElement("draw-line").active =
                  !getToggleButton("draw-line").active;
              }}
            >
              Toggle draw line action
            </vl-toggle-button>
            <p>Draw line</p>
          </div>

          <div style={toggleItemStyling}>
            <vl-toggle-button
              class="draw-polygon-toggle-button"
              data-vl-icon="pencil"
              data-vl-text-hidden
              onClick={() => {
                getActionElement("draw-polygon").active =
                  !getToggleButton("draw-polygon").active;
              }}
            >
              Toggle draw polygon action
            </vl-toggle-button>
            <p>Draw Polygon</p>
          </div>
        </div>
      </vl-map-side-sheet>

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

        <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
        <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
        <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

        <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
        <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
        <vl-map-select-action
          class="select-action action"
          data-vl-default-active
          ref={defaultActiveActionRef}
        ></vl-map-select-action>
      </vl-map-features-layer>

      <vl-map-features-layer data-vl-name="Measurements">
        <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
      </vl-map-features-layer>
    </vl-map>
  );
};

export default MapView;
