import React from "react";

class DisplayInfo extends React.Component {
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        // const listUsers = this.props.listUsers
        // props => viet tat property
        return (
            <div>
                {listUsers.map((user) => {
                    console.log(user)
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name} </div>
                            <div>My name's {user.age} </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )


    }
}
export default DisplayInfo