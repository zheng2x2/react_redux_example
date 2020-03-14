import DisplayNumber from "../components/DisplayNumber";
import {connect} from "react-redux";

function mapReduxStateToReactProps(state){
    return {
        number : state.number
    }
}
// function mapReduxDaispatchToReactProps(){}

export default connect(mapReduxStateToReactProps)(DisplayNumber);


/* import React from "react";
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
        return <DisplayNumber number={this.state.number} unit="{this.props.unit}/>
    }
} */