import Card from "./Card";
import "../styles/allCards.css"


const AllCards = ({user}) => {

const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = user.user.data.keyData

  return (
    <div className="container-cards">
      <Card img={"assets/calorie.png"} indicator={calorieCount} category={"calories"} color={"#ff000020"}/>
      <Card img={"assets/proteine.png"} indicator={proteinCount} category={"proteines"}  color={"#4ab7ff20"}/>
      <Card img={"assets/apple.svg"} indicator={carbohydrateCount} category={"glucides"}  color={"#f9ce2320"}/>
      <Card img={"assets/cheeseburger.svg"} indicator={lipidCount} category={"lipides"}  color={"#ff000020"}/>
    </div>
  );
};

export default AllCards;
