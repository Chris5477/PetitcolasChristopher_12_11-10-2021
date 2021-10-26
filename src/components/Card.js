import "../styles/card.css"

const Card = (props) => {
  let unity = props.category === "calories" ? "Kcal" : "g";

  return (
    <div className="card">
      <img classname="icon-card" style={{ backgroundColor: props.color, padding: 15, borderRadius: "6px" }} src={props.img} alt="icon" />
      <div>
        <p className="indicator">
          {props.indicator}
          {unity}
        </p>
        <p className="category">{props.category}</p>
      </div>
    </div>
  );
};
export default Card;
