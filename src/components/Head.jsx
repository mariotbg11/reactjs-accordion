import star from "../assets/icon-star.svg";

function Head() {
  return (
    <div className="head">
      <img className="icon-star" src={star} alt="Star icon" />
      <h1 className="faq-title">FAQs</h1>
    </div>
  );
}

export default Head;
