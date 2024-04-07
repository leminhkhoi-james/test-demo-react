//class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
 
  // JSX
  render() {
    return(
    <div>
       <UserInfo/>
       <br />
       <DisplayInfo name='James' age='30' />
        </div>
        )  ;
  }
}

export default  MyComponent;
