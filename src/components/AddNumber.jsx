import React from 'react';

export default class AddNumber extends React.Component {
    render(){
      return(
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+"/>
          <input type="text" value="0"/>
        </div>
      )
    }
}