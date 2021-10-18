import Header from "./components/Header";
import Introduction from "./components/Introduction";
import AccordionDemo from "./components/AccordionDemo";
import "uig-webcomponents/lib/components/accordion";
import "vl-ui-input-field/dist";
import "vl-ui-input-field/dist/style.css";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <AccordionDemo />
    </>
  );
}

export default App;
