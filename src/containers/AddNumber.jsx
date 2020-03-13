import React from "react";
import AddNumber from "../components/AddNumber";
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
}