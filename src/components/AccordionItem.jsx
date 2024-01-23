import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";

function AccordionItem({ curOpen, onOpen, title, num, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="item">
      <div className="head-item" onClick={handleToggle}>
        <p className="title">{title}</p>
        <img
          className="icon"
          src={isOpen ? iconMinus : iconPlus}
          alt="Icon plus & minus"
        />
      </div>
      {isOpen && <p className="text">{children}</p>}
    </div>
  );
}

export default AccordionItem;
