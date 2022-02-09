// import React from "react";
// import { useEffect, useRef } from "react";
// import Page from "../../components/Page";
// import SectionWrap from "../../components/SectionWrap";
// import ResetCookiesButton from "./ResetCookiesButton";

// const WithExtraOptIns = () => {
//   const consentRef = useRef(null);

//   useEffect(() => {
//     consentRef.current.extraOptIns = [
//       {
//         name: "defaultChecked",
//         label: "Default checked",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         defaultChecked: true,
//       },
//       {
//         name: "withoutDescription",
//         label: "Without description",
//       },
//       {
//         name: "mandatory",
//         label: "Mandatory one",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         mandatory: true,
//       },
//     ];
//   }, []);

//   return (
//     <>
//       <vl-cookie-consent ref={consentRef}></vl-cookie-consent>
//       <Page title="Consent with extra opt ins">
//         <SectionWrap>
//           <div is="vl-column" data-vl-size="12">
//             <ResetCookiesButton />
//           </div>
//         </SectionWrap>
//       </Page>
//     </>
//   );
// };

// export default WithExtraOptIns;
