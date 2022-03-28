import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/legacy/upload";

const UploadView = () => {
  return (
    <Page title="Upload">
      <SectionWrap stackedLarge>
        <div is="vl-column" data-vl-size="12">
          <vl-upload
            url="http://httpbin.org/post"
            data-vl-input-name="files"
          ></vl-upload>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default UploadView;
