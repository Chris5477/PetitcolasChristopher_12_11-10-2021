import Card from "./Card";
import "../styles/allCards.css"
import calories from "../assets/calorie.png"
import protien from "../assets/proteine.png"
import apple from "../assets/apple.svg"
import lipide from "../assets/cheeseburger.svg"


const AllCards = ({user}) => {

// const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = user.user.data.keyData
const calorieCount = 2
const proteinCount = 10
const carbohydrateCount = 11
const lipidCount = 100

  return (
    <div className="container-cards">
      <Card img={calories} indicator={calorieCount} category={"calories"} color={"#ff000020"}/>
      <Card img={protien} indicator={proteinCount} category={"proteines"}  color={"#4ab7ff20"}/>
      <Card img={apple} indicator={carbohydrateCount} category={"glucides"}  color={"#f9ce2320"}/>
      <Card img={lipide} indicator={lipidCount} category={"lipides"}  color={"#ff000020"}/>
    </div>
  );
};

export default AllCards;
