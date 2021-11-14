import "../styles/card.css";
import PropTypes from "prop-types";

const Card = ({ img, indicator, category, color }) => {
  let unityWeight = category === "calories" ? "Kcal" : "g";

  return (
    <div className="card">
      <img
        className="icon-card"
        style={{ backgroundColor: color, padding: 15, borderRadius: "6px" }}
        src={img}
        alt="icon"
      />
      <div>
        <p className="indicator">
          {indicator}
          {unityWeight}
        </p>
        <p className="category">{category}</p>
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
