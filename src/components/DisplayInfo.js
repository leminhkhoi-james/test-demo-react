import React from "react";

class DisplayInfo extends React.Component{
    render(){
        console.log(this.props)
        // props => viet tat property
        return(
            <div>
                <div>My name's {this.props.name} </div>
                <div>My age's {this.props.age}</div>
            </div>
        )
    }
}
export default DisplayInfo