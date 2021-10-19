import styled from "styled-components";

const DivCard = styled.div`
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  padding: 30px 50px 30px 10px;
  background-color:#f2f2f2;
`;

const StyleIMg = styled.img`
width:30px;`


const CountCategory = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0;
  `;
  
  const Type = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin:0;
`;

const Card = (props) => {
  let unity = props.category === "calories" ? "Kcal" : "g";


  return (
    <DivCard>
      <StyleIMg style={{backgroundColor: props.color, padding:20, borderRadius:"6px"}} src={props.img} alt="icon" />
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
