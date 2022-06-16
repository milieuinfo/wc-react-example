import React from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/legacy/textarea";
import "uig-webcomponents/lib/legacy/textarea/styles.css";
import SectionWrap from "../../components/SectionWrap";

const TextareaView = () => {
  return (
    <Page title="Textarea">
      <SectionWrap>
        <div is="vl-column">
          <textarea id="textarea" is="vl-textarea" cols="40" rows="4">
            foobar
          </textarea>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default TextareaView;
