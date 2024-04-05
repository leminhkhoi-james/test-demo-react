//class component
//function component
import React from "react";

class MyComponent extends React.Component {
  state ={
  name:'Khoi',
  address: 'hcm',
  age: 18,
  };
  // JSX
  render() {
    return   (
    <div>
      My name is {this.state.name}
        </div>
        )  ;
  }
}

export default  MyComponent;
