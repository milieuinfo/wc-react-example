import React from "react";
import { resetCookieConsent } from "uig-webcomponents/lib/components/cookie-consent/utils";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/button/styles.css";

const ResetCookiesButton = () => (
  <button onClick={resetCookieConsent} is="vl-button">
    Reset cookie consent
  </button>
);

export default ResetCookiesButton;
