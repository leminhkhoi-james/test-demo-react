import React from "react";
class UserInfo extends React.Component{
    state ={
        name:'Khoi',
        address: 'hcm',
        age: 18,
        };
      
        handleOnChangeInput = (event) =>{
          this.setState({
            name: event.target.value
          })
        }
      
        handleOnChangeAge = (event) =>{
          this.setState({
            age: event.target.value
          })
        }
        handleOnSubmit = (event) => {
          event.preventDefault()
        }

render(){
    return(
        <div>
              My name is {this.state.name} and I'm {this.state.age}
       <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Your name: </label>
        <input type="text"
        onChange={(event) => this.handleOnChangeInput(event) }
        />
       <button>Submit</button>

       <label>Your age: </label>
        <input type="text"
        onChange={(event) => this.handleOnChangeAge(event) }
        />
       <button>Submit</button>
       </form>
       </div>
    )
}
}
export default UserInfo;