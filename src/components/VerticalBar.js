

import styled from "styled-components";
import Navigation2 from "./Navigation2";

const VerticalLayout = styled.div`
background-color: black;
width: 97px;
height: 749px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: space-around;
position: relative;
`

const VerticalBar = () => {
  return (
    <VerticalLayout>
     <Navigation2 />
    </VerticalLayout>
  );
};

export default VerticalBar;
