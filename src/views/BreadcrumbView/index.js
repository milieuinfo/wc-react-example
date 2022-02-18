import React from "react";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";
import "uig-webcomponents/lib/components/breadcrumb";

const BreadcrumbView = () => {
  const items = [
    { label: "Item 1", href: "https://www.google.com" },
    { label: "Item 2", href: "https://www.google.com" },
    { label: "Item 3", href: "https://www.google.com" },
  ];

  return (
    <Page title="Breadcrumb">
      <SectionWrap>
        <div is="vl-column">
          <vl-breadcrumb>
            {items.map(({ label, href }) => (
              <vl-breadcrumb-item data-vl-href={href}>
                {label}
              </vl-breadcrumb-item>
            ))}
          </vl-breadcrumb>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default BreadcrumbView;
