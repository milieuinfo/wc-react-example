import React, { useState, useRef } from "react";

const AccordionDemo = () => {
  const accordionRef = useRef();
  const [toggleText, setToggleText] = useState("Accordion toggle text");
  return (
    <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div is="vl-column" data-vl-size="8">
            <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column">
                <input
                  is="vl-input-field"
                  value={toggleText}
                  onChange={(event) => setToggleText(event.target.value)}
                />
              </div>
              <div is="vl-column">
                <button
                  is="vl-button"
                  onClick={() => accordionRef.current.toggle()}
                >
                  Toggle accordion
                </button>
              </div>
              <div is="vl-column">
                <vl-accordion
                  ref={accordionRef}
                  data-vl-toggle-text={toggleText}
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                </vl-accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionDemo;
