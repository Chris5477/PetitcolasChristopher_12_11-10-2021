import styled from "styled-components";
import Card from "./Card";

const Cards = styled.div`
  grid-area: 2/3/4/4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const AllCards = (props) => {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = props.energy[0].keyData;

  return (
    <Cards>
      <Card img={"assets/calorie.png"} indicator={calorieCount} category={"calories"} color={"#ff000020"}/>
      <Card img={"assets/proteine.png"} indicator={proteinCount} category={"proteines"}  color={"#4ab7ff20"}/>
      <Card img={"assets/apple.svg"} indicator={carbohydrateCount} category={"glucides"}  color={"#f9ce2320"}/>
      <Card img={"assets/cheeseburger.svg"} indicator={lipidCount} category={"lipides"}  color={"#ff000020"}/>
    </Cards>
  );
};

export default AllCards;
