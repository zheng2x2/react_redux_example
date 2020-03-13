import React from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";

export default class extends React.Component {

    state = {
        number : store.getState().number
    }

    constructor(props){
        super(props);
        store.subscribe( function(){
            this.setState({number : store.getState().number});
        }.bind(this) );
    }

    render(){
        return <DisplayNumber number={this.state.number}/>
    }
}