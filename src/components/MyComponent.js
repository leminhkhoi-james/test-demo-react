//class component
//function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Khoi', age: 15 },
    { id: 2, name: 'James', age: 18 },
    { id: 3, name: 'Tu', age: 27 },

  ])

  const handleAddNewUser = () => {
    alert('me')
  }
  // JSX

  return (
    <>
      <AddUserInfo />
      <br />
      <DisplayInfo listUsers={listUsers}
        handleAddNewUser={handleAddNewUser}
      />
    </>
  );
}

export default MyComponent;
