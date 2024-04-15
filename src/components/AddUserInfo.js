import React, { useState } from "react";
const AddUserInfo = (props) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('hcm')
  const [age, setAge] = useState(18)


  const handleOnChangeInput = (event) => {
    setName(event.target.value)
  }

  const handleOnChangeAge = (event) => {
    setAge(event.target.value)
  }
  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button>Submit</button>


        <label>Your age: </label>
        <input type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default AddUserInfo;