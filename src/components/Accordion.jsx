import Head from "./Head";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion({ data }) {
  const [curOpen, setcurOpen] = useState(null);

  return (
    <div className="faq-accordion">
      <Head />
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setcurOpen}
          title={el.title}
          num={i}
          key={el.id}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
