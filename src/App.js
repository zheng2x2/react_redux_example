import React from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends React.Component {
  state = {
    number : 0
  }

  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        {/* <AddNumberRoot onClick={function(size){
            this.setState({number:this.state.number + size})
        }.bind(this)}/>
        <DisplayNumberRoot number={this.state.number}/> */}
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    );
  }
}

export default App;
