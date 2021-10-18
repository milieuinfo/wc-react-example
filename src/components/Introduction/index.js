import React from "react";
import "uig-webcomponents/lib/components/typography";
import "uig-webcomponents/lib/components/introduction";
import "uig-webcomponents/lib/components/introduction/styles.css";

const Introduction = () => (
  <section is="vl-region">
    <div is="vl-layout">
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="8">
              <h1 is="vl-h1" data-vl-no-space-bottom>
                Example
              </h1>
            </div>
          </div>
        </div>
        <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
          <vl-typography>
            <hr />
          </vl-typography>
        </div>
      </div>
    </div>
  </section>
);

export default Introduction;
