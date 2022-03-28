import React from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/components/info-tile";
import SectionWrap from "../../components/SectionWrap";

const InfoTileView = () => {
  return (
    <Page title="Info Tile">
      <SectionWrap>
        <div is="vl-column" data-vl-size="12">
          <vl-info-tile data-vl-toggleable data-vl-auto-open>
            <span slot="title">Info tile title</span>
            <span slot="subtitle">Info tile subtitle</span>
            <div slot="content">Info tile content</div>
          </vl-info-tile>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default InfoTileView;
