import React from "react";

const SectionWrap = ({ children }) => {
  return (
    <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div is="vl-column" data-vl-size="8">
            <div is="vl-grid" data-vl-is-stacked>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrap;
