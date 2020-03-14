import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

//function mapStateToProps(state){} 이벤트만 전달하고 state는 전달안함.

function mapDispatchToProps(dispatch){
    return {
        onClick : function(size){
            dispatch({
                type : 'INCREMENT',
                size : size
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);

/* import React from "react";
import store from "../store";

export default class extends React.Component {
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({
                type : 'INCREMENT',
                size : size
            })
        }.bind(this)}/>
    }
} */