//class component
//function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Khoi', age: 15 },
      { id: 2, name: 'James', age: 18 },
      { id: 3, name: 'Tu', age: 27 },

    ]
  }

  handleAddNewUser = () => {
    alert('me')
  }
  // JSX
  render() {
    return (
      <>
        <AddUserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers}
          handleAddNewUser={this.handleAddNewUser}
        />
      </>
    );
  }
}

export default MyComponent;
