import React, { Component } from "react";
import Sand from "./Sand";
import Glass from "./Glass"


class Bottle extends Component {

    constructor(props){
        super(props);

        this.state={
            text: "Update Me!"
        }

        this.updateBottleState = this.updateBottleState.bind(this);
    }

    /**
     * lets update this state
     */
    updateBottleState(newText){
        this.setState({
            text: newText
        });
    }


    render(){
        return(
            <div>
                <Sand
                    text={this.state.text}
                    updateText={this.updateBottleState}
                />
                <Glass
                    text={this.state.text}
                    updateText={this.updateBottleState}
                />

                BOTTLE STATE: {this.state.text}
            </div>
        );
    }

}


export default Bottle;