import React, { Component } from "react";


class Custom extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <input
                    type={"text"}
                    onChange={e=>this.props.updateText(e.target.value)}
                />
            </div>
        );
    }

}


export default Custom;