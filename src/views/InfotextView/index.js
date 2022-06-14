import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/legacy/infotext";
import "uig-webcomponents/lib/legacy/infotext/styles.css";

const InfotextView = () => {
  return (
    <Page title="Infotext">
      <SectionWrap>
        <div id="infotext" is="vl-infotext">
          <div>
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
          </div>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div is="vl-infotext">
          <a href="#">
            <div data-vl-value="">3200</div>
            <div data-vl-text="">Bezoekers per dag</div>
          </a>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div style={{ flex: 1 }}>
          <div id="infotext-badge" is="vl-infotext" data-vl-badge="">
            <div>
              <div data-vl-value="">12</div>
              <div data-vl-text="">Openstaande zaken</div>
            </div>
          </div>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div style={{ flex: 1 }}>
          <div is="vl-infotext" data-vl-badge="">
            <a href="#">
              <div data-vl-value="">12</div>
              <div data-vl-text="">Openstaande zaken</div>
            </a>
          </div>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div style={{ flex: 1 }}>
          <div
            id="infotext-badge-complex-content"
            is="vl-infotext"
            data-vl-badge=""
          >
            <div>
              <div data-vl-value="">
                <span class="lengte-waarde" style={{ fontSize: "1.25em" }}>
                  150
                </span>{" "}
                <span class="eenheid-waarde" style={{ fontSize: "1em" }}>
                  cm
                </span>
              </div>
              <div data-vl-text="">
                <span class="lengte" style={{ fontSize: "1.25em" }}>
                  Lengte
                </span>{" "}
                <span class="eenheid" style={{ fontSize: "1em" }}>
                  (eenheid)
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default InfotextView;
