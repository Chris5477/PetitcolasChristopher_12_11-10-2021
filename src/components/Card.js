import "../styles/card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  let unity = props.category === "calories" ? "Kcal" : "g";

  return (
    <div className="card">
      <img
        className="icon-card"
        style={{ backgroundColor: props.color, padding: 15, borderRadius: "6px" }}
        src={props.img}
        alt="icon"
      />
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

Card.propTypes = {
  img: PropTypes.string.isRequired,
  indicator: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Card;
