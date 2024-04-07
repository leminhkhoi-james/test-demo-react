//class component
//function component
import React from "react";

class MyComponent extends React.Component {
  state ={
  name:'Khoi',
  address: 'hcm',
  age: 18,
  };

  // handleClick(event) {
  //   console.log("Click button");
  //   console.log("My name is", this.state.name);

  //   this.setState({
  //     name: 'Eric'
  //   })
  // }

  handleOnChangeInput = (event) =>{
    this.setState({
      name: event.target.value
    })
console.log(event, event.target.value)
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
   console.log(this.state)
  }
  // JSX
  render() {
    return   (
    <div>
      My name is {this.state.name}
       <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text"
        onChange={(event) => this.handleOnChangeInput(event) }
        />
       <button>Submit</button>
       </form>
        </div>
        )  ;
  }
}

export default  MyComponent;
