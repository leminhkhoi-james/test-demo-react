import React, { useState } from "react";
import './DisplayInfo.scss';
// class DisplayInfo extends React.Component {


//     }
// }

const DisplayInfo = (props) => {
    // destructuring array/object
    const { listUsers } = props;
    // const listUsers = this.props.listUsers
    // props => viet tat property

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    return (

        <div>
            <div>
                <span onClick={handleShowHideListUser}>
                    {isShowHideListUser === true ? 'Hide list user' : " Show list user "}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {
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