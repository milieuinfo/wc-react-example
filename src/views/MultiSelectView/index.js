import React from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/legacy/multiselect";
import "uig-webcomponents/lib/legacy/multiselect/styles.css";
import "uig-webcomponents/lib/components/icon";
import SectionWrap from "../../components/SectionWrap";

const MultiSelectView = () => {
  return (
    <Page title="Multiselect">
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Example 1</h2>
        </div>
        <div is="vl-column">
        <select id="multiselect-voorgeselecteerd" is="vl-multiselect">
          <option selected="" value="Bruges">Brugge</option>
          <option value="Brussels">Brussel</option>
          <option value="Ghent">Gent</option>
        </select>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Example 2</h2>
        </div>
        <div is="vl-column">
        <select id="multiselect-gegroepeerd" is="vl-multiselect">
          <optgroup label="Landen">
            <option selected="" value="Belgium">België</option>
            <option value="Germany">Duitsland</option>
            <option value="France">Frankrijk</option>
          </optgroup>
          <optgroup label="Steden">
            <option selected="" value="Bruges">Brugge</option>
            <option value="Brussels">Brussel</option>
            <option value="Ghent">Gent</option>
          </optgroup>
        </select>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default MultiSelectView;
