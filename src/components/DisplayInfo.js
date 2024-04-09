import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            // !: bien true thanh false, false thanh true
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        // const listUsers = this.props.listUsers
        // props => viet tat property
        return (
            <div>
                <div>
                    <span onClick={() => {
                        this.handleShowHide()
                    }}>
                        {this.state.isShowListUser == true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser == true &&
                    <div>
                        {listUsers.map((user) => {
                            console.log(user)
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name} </div>
                                    <div>My name's {user.age} </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )


    }
}
export default DisplayInfo