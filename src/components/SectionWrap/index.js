import React from "react";

const SectionWrap = ({ children, stackedLarge }) => {
  return (
    <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div is="vl-column" data-vl-size="8">
            <div
              is="vl-grid"
              data-vl-is-stacked={stackedLarge ? null : true}
              data-vl-is-stacked-large={stackedLarge ? true : null}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrap;
