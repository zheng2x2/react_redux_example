import React from 'react';
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends React.Component {
    render(){
      return(
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumber/>
          {/* <DisplayNumber number={this.props.number}/> */}
        </div>
      )
    }
}