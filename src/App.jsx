import Accordion from "./components/Accordion";
import faqs from "./datafaqs";

function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
