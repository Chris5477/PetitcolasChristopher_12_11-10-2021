//IMPORT ALL DEPENDENCIES
import Header from "./Header";
// import AllCards from "./AllCard";
import ContainerGraphs from "./ContainerGraphs";



import "../styles/content.css"

//BUILD COMPONENT CONTENT, HE RETRIEVES DATAS SENT BY THIS PARENT
// EACH COMPOnENT SEND PROPS ON THESE CHILDREN
const Content = (props) => {
  console.log(props)

  return (
    <div className="content">
      <Header name={props.userData[0]} />
      
      <ContainerGraphs userData={props.userData} activity={props.activityData} performance={props.performance} average={props.average} /> 
      {/* <AllCards energy={props.userData} />  */}
  
    </div>
  );
};

export default Content;
