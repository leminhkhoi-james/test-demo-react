//class component
//function component
import React from "react";

class MyComponent extends React.Component {
  state ={
  name:'Khoi',
  address: 'hcm',
  age: 18,
  };

  handleClick(event) {
    console.log("Click button");
    console.log("My name is", this.state.name);

    this.setState({
      name: 'Eric'
    })
  }
  // JSX
  render() {
    return   (
    <div>
      My name is {this.state.name}
      <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
        </div>
        )  ;
  }
}

export default  MyComponent;
