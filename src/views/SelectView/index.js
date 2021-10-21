import React, { useState } from "react";
import Page from "../../components/Page";
import "vl-ui-select/dist";
import "vl-ui-select/dist/style.css";
import SectionWrap from "../../components/SectionWrap";

const options = [
  { value: "belgium", name: "België" },
  { value: "germany", name: "Duitsland" },
  { value: "france", name: "Frankrijk" },
  { value: "italy", name: "Italië" },
  { value: "netherlands", name: "Nederland" },
  { value: "portugal", name: "Portugal" },
];

const SelectView = () => {
  const [data, setData] = useState({
    normal: "germany",
    withSearch: "germany",
  });

  return (
    <Page title="Select">
      <SectionWrap>
        <div is="vl-column">
          <select
            is="vl-select"
            data-vl-block
            defaultValue={data.normal}
            onChange={(event) =>
              setData({ ...data, normal: event.target.value })
            }
          >
            {options.map(({ value, name }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div is="vl-column">
          <select
            is="vl-select"
            defaultValue={data.withSearch}
            data-vl-select
            data-vl-select-search-empty-text="Geen resultaten gevonden"
            onChange={(event) =>
              setData({ ...data, withSearch: event.target.value })
            }
          >
            {options.map(({ value, name }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </SectionWrap>
      <SectionWrap>
        <div is="vl-column">
          <pre>{JSON.stringify(data)}</pre>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default SelectView;
