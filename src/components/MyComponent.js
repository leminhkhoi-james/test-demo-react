//class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
 state ={
  listUsers: [
    { id:1, name: 'Khoi', age:30},
    { id:2, name: 'James', age:18},
    { id:3, name: 'Tu', age:27},

  ]
 }

  // JSX
  render() {
    return(
    <div>
       <UserInfo/>
       <br />
       <DisplayInfo listUsers={this.state.listUsers}  />
        </div>
        )  ;
  }
}

export default  MyComponent;
