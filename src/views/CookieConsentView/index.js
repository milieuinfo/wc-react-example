// import { Switch, Route, useRouteMatch } from "react-router-dom";
// import "uig-webcomponents/lib/components/cookie-consent";
// import Page from "../../components/Page";
// import SectionWrap from "../../components/SectionWrap";
// import Doormat from "../../components/Doormat";
// import Default from "./Default";
// import WithAnalytics from "./WithAnalytics";
// import WithExtraOptIns from "./WithExtraOptIns";

// const CookieConsentView = () => {
//   const { path } = useRouteMatch();

//   return (
//     <>
//       <Switch>
//         <Route exact path={path}>
//           <Page title="Cookie consent">
//             <SectionWrap>
//               <Doormat href="/cookie-consent/default" title="Default example" />
//               <Doormat
//                 href="/cookie-consent/with-analytics"
//                 title="Example with analytics"
//               />
//               <Doormat
//                 href="/cookie-consent/with-extra-opt-ins"
//                 title="Example with extra opt ins"
//               />
//             </SectionWrap>
//           </Page>
//         </Route>
//         <Route path={`${path}/default`}>
//           <Default />
//         </Route>
//         <Route path={`${path}/with-analytics`}>
//           <WithAnalytics />
//         </Route>
//         <Route path={`${path}/with-extra-opt-ins`}>
//           <WithExtraOptIns />
//         </Route>
//       </Switch>
//     </>
//   );
// };

// export default CookieConsentView;
