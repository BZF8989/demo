import React, { Component } from "react";


class Glass extends Component {

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                GLASS: {this.props.text}
            </div>
        );
    }

}


export default Glass;