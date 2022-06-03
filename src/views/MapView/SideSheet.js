import React, { useRef, useEffect, useState } from "react";
import ActionGroup from "./ActionGroup";
import Button from "./Button";

const SideSheet = ({ updateAction, actions }) => {
  const modifyButtonRef = useRef();
  const deleteButtonRef = useRef();

  // useEffect(() => {
  //   modifyButtonRef.current.active = modifyButtonIsActive;
  //   actionRefs.modify.current.active = modifyButtonIsActive;
  // }, [actionRefs.modify, modifyButtonIsActive]);

  // useEffect(() => {
  //   deleteButtonRef.current.active = deleteButtonIsActive;
  //   actionRefs.delete.current.active = deleteButtonIsActive;
  // }, [actionRefs.delete, deleteButtonIsActive]);

  return (
    <vl-map-side-sheet>
      <h6 is="vl-h6">Measure</h6>
      <ActionGroup>
        <Button onClick={() => updateAction("measure", true)}>Start</Button>
        <Button onClick={() => updateAction("measure", false)}>Stop</Button>
      </ActionGroup>
      <div>
        <h6 is="vl-h6">Shapes</h6>
        <div>
          <vl-toggle-button
            ref={modifyButtonRef}
            // onClick={() => updateAction("modify", !getActionValue("modify"))}
          >
            Modify
          </vl-toggle-button>
          <vl-toggle-button
            ref={deleteButtonRef}
            // onClick={() => upda  teAction("delete", !getActionValue("delete"))}
          >
            Delete
          </vl-toggle-button>
        </div>
        <div>
          <vl-toggle-button
            class="draw-point-toggle-button"
            data-vl-icon="pencil"
            data-vl-text-hidden
            onClick={() => {
              // getActionElement("draw-point").active =
              // !getToggleButton("draw-point").active;
            }}
          >
            Toggle draw point action
          </vl-toggle-button>
          <p>Draw point</p>
        </div>
        <div>
          <vl-toggle-button
            class="draw-line-toggle-button"
            data-vl-icon="pencil"
            data-vl-text-hidden
            onClick={() => {
              // getActionElement("draw-line").active =
              // !getToggleButton("draw-line").active;
            }}
          >
            Toggle draw line action
          </vl-toggle-button>
          <p>Draw line</p>
        </div>
        <div>
          <vl-toggle-button
            class="draw-polygon-toggle-button"
            data-vl-icon="pencil"
            data-vl-text-hidden
            onClick={() => {
              // getActionElement("draw-polygon").active =
              // !getToggleButton("draw-polygon").active;
            }}
          >
            Toggle draw polygon action
          </vl-toggle-button>
          <p>Draw Polygon</p>
        </div>
      </div>
    </vl-map-side-sheet>
  );
};

export default SideSheet;
