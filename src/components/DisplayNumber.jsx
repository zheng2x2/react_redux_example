import React from 'react';
// import store from '../store.js';

export default class DisplayNumber extends React.Component {

    // state = {number : store.getState().number}

    // constructor(props){
    //     super(props);
    //     store.subscribe( function(){
    //         this.setState({
    //             number : store.getState().number
    //         })
    //     }.bind(this))
    // }

    render(){
      return(
        <div>
          <h1>Display Number</h1>
          <input type="text" value={this.props.number} readOnly/> {/*this.props.number*/}
        </div>
      )
    }
}
