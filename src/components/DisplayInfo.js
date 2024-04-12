import React from "react";
import './DisplayInfo.scss';
// class DisplayInfo extends React.Component {


//     }
// }

const DisplayInfo = (props) => {
    // destructuring array/object
    const { listUsers } = props;
    // const listUsers = this.props.listUsers
    // props => viet tat property
    return (
        <div>
            {true &&
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
export default DisplayInfo