import styled from "styled-components";

const DivCard = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10px;
  background-color: #fbfbfb;
`;

const StyleIMg = styled.img`
width:17px;
height:17px;
`;

const CountCategory = styled.p`
width: 75px;
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

const Type = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const Card = (props) => {
  let unity = props.category === "calories" ? "Kcal" : "g";

  return (
    <DivCard>
      <StyleIMg style={{ backgroundColor: props.color, padding: 15, borderRadius: "6px" }} src={props.img} alt="icon" />
      <div>
        <CountCategory>
          {props.indicator}
          {unity}
        </CountCategory>
        <Type>{props.category}</Type>
      </div>
    </DivCard>
  );
};
export default Card;
