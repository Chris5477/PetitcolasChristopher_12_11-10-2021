import { Link } from "react-router-dom"
import styled from "styled-components";

const Menu = styled.div`
display : flex;
flex-direction:column;
align-items : center;
`
const ContainerPicture = styled(Link)`
width : 64px;
height 64px;
background-color:#FFFFFF;
border-radius:6px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;
`

const Footer = styled.footer`
font-size: 12px;
font-weight : 500;
color: #FFFFFF;
transform : rotateZ(-90deg);
width: 150px;
position:absolute;
bottom:12%;
`

const Navigation2 = () => {
  return (
    <div>
      <Menu>
        <ContainerPicture to="/"><img src="../assets/relax.png" alt="logo" /></ContainerPicture> 
        <ContainerPicture to="/"><img src="../assets/swimmer.png" alt="logo" /></ContainerPicture> 
        <ContainerPicture to="/"><img src="../assets/biker.png" alt="logo" /></ContainerPicture> 
        <ContainerPicture to="/"><img src="..//assets/altere.png" alt="logo" /></ContainerPicture> 
        <Footer>Copyright, SportSee 2020</Footer>
      </Menu>
    </div>
  );
};

export default Navigation2;
