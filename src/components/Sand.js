import React, { Component } from "react";
import Custom from './Custom';

class Sand extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <Custom
                    text={this.props.text}
                    updateText={this.props.updateText}
                />
            </div>
        );
    }

}


export default Sand;