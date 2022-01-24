import { useEffect, useRef } from "react";
import "uig-webcomponents/lib/components/cookie-consent";
import { resetCookieConsent } from "uig-webcomponents/lib/components/cookie-consent/utils";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/button/styles.css";
import Page from "../../components/Page";
import SectionWrap from "../../components/SectionWrap";

const CookieConsentView = () => {
  const consentRef = useRef(null);

  useEffect(() => {
    consentRef.current.addEventListener("vl-submitted", (event) => {
      console.log(event.detail);
    });
    consentRef.current.extraOptIns = [
      {
        name: "socialmedia",
        label: "Sociale media",
        description: "Beschrijving van de sociale media cookies.",
        defaultChecked: true,
      },
    ];
  }, []);

  return (
    <>
      <vl-cookie-consent data-vl-analytics ref={consentRef}></vl-cookie-consent>
      <Page title="Cookie consent">
        <SectionWrap>
          <div is="vl-column" data-vl-size="12">
            <button onClick={resetCookieConsent} is="vl-button">
              Reset cookie consent
            </button>
          </div>
        </SectionWrap>
      </Page>
    </>
  );
};

export default CookieConsentView;
