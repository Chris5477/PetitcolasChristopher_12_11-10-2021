import { Link } from "react-router-dom"
import styled from "styled-components";

const Menu = styled.div`
@media screen and (min-width: 1024px){
  width: 91px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
}
`
const ContainerPicture = styled(Link)`
@media screen and (min-width: 1024px){
  margin-bottom: 20px;
  background-color: white;
  border-radius: 7px;
}
`

const Footer = styled.footer`
@media screen and (min-width: 1024px){
  color: #FFFFFF;
  transform: rotateZ(-90deg);
  width: 150px;
  font-size: 12px;
  position: absolute;
  bottom:14%;
}
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
