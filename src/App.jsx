import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import faqs from "./datafaqs";

function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />
      <Footer />
    </div>
  );
}

export default App;
